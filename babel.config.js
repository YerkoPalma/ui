module.exports = {
  presets: ['@babel/preset-env'],
  ignore: [/[/\\]core-js/, /@babel[/\\]runtime/],
  plugins: [
    '@babel/transform-runtime',
    ['module-resolver', {
      'alias': { '^https://unpkg.com/(.+)\\?module$': '\\1' }
    }]
  ]
}
