module.exports = {
  plugins: [{
    name: 'preset-default',
    params: {
      overrides: {
        removeViewBox: false,
        mergePaths: false,
        cleanupNumericValues: {
          floatPrecision: 2
        }
      }
    }
  }]
}
