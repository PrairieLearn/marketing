import React from "react";
import NextImage, { ImageLoader, ImageProps } from "next/image";

const isProduction = process.env.NODE_ENV === "production";

const productionLoader: ImageLoader = ({ src }) => {
  return src;
};

/**
 * Small wrapper around Next.js's `<Image>` component that disables image
 * resizing in production environments. Since we're deploying statically and
 * not using Vercel, we can't optimize images at runtime.
 */
const Image: React.FC<ImageProps> = (props) => {
  const loader = isProduction ? productionLoader : undefined;
  const unoptimized = isProduction;
  return <NextImage {...props} loader={loader} unoptimized={unoptimized} />;
};

export default Image;
