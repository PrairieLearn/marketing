module.exports = {
  hooks: {
    readPackage(pkg) {
      if (
        (pkg.name.startsWith("@typescript-eslint/") ||
          pkg.name === "typescript-eslint" ||
          pkg.name === "ts-api-utils") &&
        pkg.peerDependencies?.typescript
      ) {
        // TypeScript 7 has no compiler API; lint plugins need the compatibility package.
        pkg.dependencies = {
          ...pkg.dependencies,
          typescript: "npm:@typescript/typescript6@^6.0.2",
        };
        delete pkg.peerDependencies.typescript;
      }
      return pkg;
    },
  },
};
