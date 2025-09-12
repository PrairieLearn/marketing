#!/usr/bin/env -S uv run
# /// script
# requires-python = ">=3.10"
# dependencies = [
#   "pillow>=10.0.0"
# ]
# ///

"""Crop whitespace from all university logo images in this directory.

Usage:
  uv run src/lib/images/universities/crop_logos.py            # in-place crop
  uv run src/lib/images/universities/crop_logos.py --dry-run  # show planned crops
  uv run src/lib/images/universities/crop_logos.py --suffix -c # write alongside originals

The script uses a two-stage strategy:
  1. If an alpha channel exists, crop the bounding box of non‑transparent pixels.
  2. Otherwise, detect near‑white background (configurable threshold) and crop
     around remaining content.

By default images are overwritten only when a crop actually reduces dimensions.

To run this script:

uv run src/lib/images/universities/crop_logos.py
"""

from __future__ import annotations

import argparse
from pathlib import Path
from typing import Iterable

from PIL import Image, ImageOps

IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg", ".bmp", ".gif", ".webp"}


def is_image_file(filename: str) -> bool:
    return any(filename.lower().endswith(ext) for ext in IMAGE_EXTENSIONS)


def crop_whitespace(
    img: Image.Image,
    threshold: int = 250,
) -> Image.Image:
    """Return a cropped version of img removing uniform / solid margins.

    Strategy (short-circuit when a crop is found):
      1. Alpha channel bounding box.
      2. Near-white luminance threshold.
      3. (Optional) Border color average + tolerance based mask.
    """
    img = ImageOps.exif_transpose(img)

    # (1) Alpha channel bounding box
    if "A" in img.getbands():
        alpha = img.split()[-1]
        bbox = alpha.getbbox()
        if bbox and bbox != (0, 0, img.width, img.height):
            return img.crop(bbox)

    # (2) Near-white threshold
    rgb = img.convert("RGB")
    lum = rgb.convert("L")
    content_mask = lum.point(lambda p: 255 if p <= threshold else 0)
    bbox = content_mask.getbbox()
    if bbox and bbox != (0, 0, img.width, img.height):
        return img.crop(bbox)

    return img


def destination_path(src: Path, suffix: str | None) -> Path:
    if not suffix:
        return src
    return src.with_name(f"{src.stem}{suffix}{src.suffix}")


def iter_images(directory: Path) -> Iterable[Path]:
    for entry in directory.iterdir():
        if entry.is_file() and is_image_file(entry.name):
            yield entry


def process_images(
    directory: Path,
    *,
    threshold: int,
    dry_run: bool,
    suffix: str | None,
) -> None:
    total = 0
    cropped_count = 0
    for path in iter_images(directory):
        total += 1
        try:
            with Image.open(path) as img:
                # Convert palette images with transparency to RGBA to avoid PIL warning
                if img.mode == "P":
                    try:
                        transparency = img.info.get("transparency")
                    except Exception:  # noqa: BLE001
                        transparency = None
                    if transparency is not None:
                        img = img.convert("RGBA")
                cropped = crop_whitespace(
                    img,
                    threshold=threshold,
                )
            if cropped.size != img.size:
                out_path = destination_path(path, suffix)
                if dry_run:
                    print(
                        f"WOULD crop {path.name}: {img.size} -> {cropped.size} -> {out_path.name}"
                    )
                else:
                    out_path.parent.mkdir(parents=True, exist_ok=True)
                    cropped.save(out_path)
                    print(f"Cropped {path.name}: {img.size} -> {cropped.size}")
                cropped_count += 1
            else:
                print(f"No crop needed: {path.name}")
        except Exception as e:  # noqa: BLE001
            print(f"Error processing {path.name}: {e}")
    print(f"Summary: {cropped_count}/{total} images cropped (threshold={threshold})")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Crop whitespace from logo images.")
    parser.add_argument(
        "--threshold",
        type=int,
        default=250,
        help="Near-white detection threshold (0-255). Lower preserves more light pixels.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Report planned changes without writing any files.",
    )
    parser.add_argument(
        "--suffix",
        type=str,
        default=None,
        help="If provided, write cropped images alongside originals with this suffix (e.g. -c).",
    )
    parser.add_argument(
        "--dir",
        type=Path,
        default=Path(__file__).parent,
        help="Directory containing images (default: script directory).",
    )
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    process_images(
        args.dir,
        threshold=args.threshold,
        dry_run=args.dry_run,
        suffix=args.suffix,
    )
