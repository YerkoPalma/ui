const fs = require('fs')
const path = require('path')
const browserify = require('browserify')
const babelify = require('babelify')

function makeBundle (file) {
  const input = path.join(__dirname, '..', 'src', file)
  const output = path.join(__dirname, '..', 'dist', file)

  fs.mkdir(path.dirname(input), { recursive: true }, err => {
    if (err) console.log(err)
    fs.mkdir(path.dirname(output), { recursive: true }, err => {
      if (err) console.log(err)
      browserify(input)
        .transform(babelify.configure({ presets: [ '@babel/preset-env' ], plugins: [ '@babel/transform-runtime' ] }), { global: true })
        .plugin('tinyify', { flat: false })
        .bundle()
        .pipe(fs.createWriteStream(output))
    })
  })
}

makeBundle('index.js')
makeBundle('components/app-shell.js')
makeBundle('components/flipper-card.js')
makeBundle('components/fs-router.js')
makeBundle('components/md-view.js')
