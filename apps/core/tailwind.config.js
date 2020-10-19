module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // purge: [
  //   './src/**/*.html',
  //   './src/**/*.js',
  //   './src/**/*.jsx',
  //   './src/**/*.ts',
  //   './src/**/*.tsx',
  //   './public/index.html',
  // ],
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
