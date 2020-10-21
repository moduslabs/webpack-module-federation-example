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
  variants: {
    appearance: ["responsive", "active"],
    borderColor: ["responsive", "hover", "focus"],
    outline: [],
    zIndex: [],
  },
  plugins: [require("@tailwindcss/ui")],
};
