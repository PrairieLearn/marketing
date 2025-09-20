import { MarkdownLayout } from "./MarkdownLayout";

export const BlogMarkdownLayout = MarkdownLayout;

import Image from "next/image";
import classNames from "classnames";

export const BlogImage = ({ src, alt = "Blog Image", full = false }: { src: string, alt?: string, full?: boolean }) => {
  return (
    <div className="d-flex justify-content-center">
    <Image src={src} alt={alt} className={classNames("img-fluid", !full && "w-50")} />
    </div>
  );
};