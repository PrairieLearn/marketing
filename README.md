# PrairieLearn Marketing Site

## Getting Started

First install dependencies:

```bash
yarn
```

Next, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the site. Pages will auto-update as you edit files.

This project uses Git submodules to pull in content from the [PrairieLearn example course](https://github.com/PrairieLearn/PrairieLearn/tree/master/exampleCourse). If you're cloning this repository for the first time, you'll need to run the following commands:

```bash
git submodule init
git submodule update
```

To update the version of the `PrairieLearn/PrairieLearn` repository to the latest, run the following:

```bash
git submodule update --remote
```

## Next.js 16 and Webpack

This project uses Next.js 16 with Webpack as the bundler (instead of the default Turbopack). This is necessary because the project uses MDX with remark/rehype plugins that are JavaScript functions, which Turbopack cannot currently handle. See `.next-webpack-note.md` for more details.
