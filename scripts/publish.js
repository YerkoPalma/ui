const { publish } = require('gh-pages')
const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')

// create CNAME and .nojekyll file
fs.writeFileSync(path.join(__dirname, '..', 'docs', 'CNAME'), pkg.homepage)
fs.writeFileSync(path.join(__dirname, '..', 'docs', '.nojekyll'), '')

// copy index as 404.html and 200.html
fs.copyFileSync(path.join(__dirname, '..', 'docs', 'index.html'), path.join(__dirname, '..', 'docs', '404.html'))
fs.copyFileSync(path.join(__dirname, '..', 'docs', 'index.html'), path.join(__dirname, '..', 'docs', '200.html'))

publish('docs', {
  dotfiles: true
}, console.log)
