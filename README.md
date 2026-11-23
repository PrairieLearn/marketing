# PrairieLearn Marketing Site

## Getting Started

Install pnpm 12.17 or newer in the 12.x series, then install dependencies:

```bash
npm install -g 'pnpm@^12.17.0'
pnpm install
```

`devEngines.packageManager` defines the supported pnpm range. The exact `packageManager` pin is retained for Vercel's Corepack integration, which otherwise uses the build image's pnpm version.

Next, run the development server:

```bash
pnpm dev
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
