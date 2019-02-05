const path = require('path')
const ImportHttpWebpackPlugin = require('import-http/webpack')

module.exports = {
  plugins: [new ImportHttpWebpackPlugin({ reload: false })],
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
