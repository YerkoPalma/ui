const { publish } = require('gh-pages')
const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')

// create CNAME and .nojekyll file
fs.writeFileSync(path.join(__dirname, '..', 'docs', 'CNAME'), pkg.homepage)
fs.writeFileSync(path.join(__dirname, '..', 'docs', '.nojekyll'), '')

publish('docs', {
  dotfiles: true
}, console.log)
