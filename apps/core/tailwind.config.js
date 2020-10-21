module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  // purge: [
  //   "./**/*.html",
  //   "./**/*.js",
  //   "./**/*.jsx",
  //   "./**/*.ts",
  //   "./**/*.tsx",
  //   "./index.html",
  // ],
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
