# fs-router

File system based front end router.

## Usage

Put the element where you want to place your pages content. If this element is 
present in your DOM, it will take control of every anchor tag with an href 
attribute.

```html
<div class="menu">
  <a href="home.html">Home</a>
  <a href="about.md">About</a>
  <a href="gallery">Gallery</a>
</div>
<fs-router default-page="pages/default.html">
  This is the starting page
</fs-router>
```

The router resolves html and md views. if no extension is provided and the path 
is found it will:

a. resolve the html file (from `gallery` to `gallery.html`)
b. resolve the md file (from `gallery` to `gallery.md`)
c. resolve an index.html or index.md file inside the folder (from `gallery` to 
`gallery/index.html` or `gallery/index.md`)

## Style

Keep in mind that what you are loading is loaded in the shadowDOM,
so, global styles wont affect your routes.
If you are rendering html, simply put `style` tags with the proper css.

```html
<style>
:host {
  display: block;
}
:host([hidden]) {
  display: none;
}

</style>
```

Also you have the option of use the `custom-style` attribute, which loads a css 
stylesheet for the shadow root of this element (so you can use the `:host` pseudo 
element)