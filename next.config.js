module.exports = {
  target: 'serverless',
  images: {
    /**
     * In production mode, we don't want to use the `default` loader,
     * but we need to put *some* value here that doesn't match `default`
     * so that `next export` doesn't error out.
     * 
     * We'll use the `imgix` loader as a placeholder, but we won't ever
     * actually use an Imgix URL - instead, we'll use `src/components/Image.tsx`,
     * which provides a custom `loader` function.
     */
    loader: process.env.NODE_ENV === 'production' ? 'imgix' : 'default',
  }
};
