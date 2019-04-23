const { publish } = require('gh-pages')
const fs = require('fs')
const pkg = require('../package.json')

// create CNAME and .nojekyll file
fs.writeFile('CNAME', pkg.homepage)
fs.writeFile('.nojekyll')

publish('docs', {
  dotfiles: true
}, console.log)

// generate bundle for every component
