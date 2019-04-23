# @yerkopalma/ui

> Personal collection of ui components

## Install

```bash
$ npm install @yerkopalma/ui 
```

or use the tags

```html
<script type="module" src="https://unpkg.com/@yerkopalma/ui?module"></script>
<script nomodule src="https://unpkg.com/@yerkopalma/ui"></script>
```

if you need to load only some specific component

```html
<script type="module" src="https://unpkg/@yerkopalma/ui/app-shell.es.js"></script>
<script nomodule src="https://unpkg/@yerkopalma/ui/ui/app-shell.js"></script>
```


## Components

- [app-shell](#app-shell)
- [flipper-card](#flipper-card)
- [i18n-toggle](#i18n-toggle)
- [i18n-content](#i18n-content)
- [md-view](#md-view)
- [fs-router](#fs-router)

### app-shell

Custom element to manage dynamic content of your app

#### Usage

Generally you only need to use `app-shell` in your markup

```html
<app-shell>
  default view
</app-shell>
```

Content inside the elemnt is the default view, but you can also 
set default view with attributes.

#### Attributes

- controller: A css selector used to define the element that 
contains the navigation links. Links must be anchor tags with an href 
attribute, this attribute can be an html (remote or local, since it 
is `fetch`ed) or markdown file.
- default: The default view. A relative path to a markdown or 
html file which will be rendered when a link inside the 
controller is not found. Decision order when navigation happens is
link href > default attribute > element content

### md-view

Custom element for rendering markdown

#### Usage

There are two ways to use this component.

By setting markdown content to the element

```html
<md-view>
  # some md content

  **Cool**, right?
</md-view>
```

or referencing an accesible markdown file

```html
<md-view src="readme.md">
</md-view>
```

Notice that you can set both, so if the file can't be reached, the 
inner content will be rendered

```html
<md-view src="remote-file.md">
  **Sorry!** we couldn't fetch your _remote file_
</md-view>
```

In your markdown content you can also render some other custom elements, like

```html
<md-view custom-elements="flipper-card">
  # Hello

  <flipper-card>
    <p slot="front">I'm in front</p>
    <p slot="back">I'm in back</p>
  </flipper-card>

  **foo** _bar_
</md-view>
```

you only need to pass the custom-elements attribute, if you have more attributes, 
you can also pass them separated by `|` character.

#### Attributes

- src: A string with the path to a remote markdown file, if not provided or
not found, inner content will be rendered
- custom-elements: A list of custom elements that can be rendered along with your markdown.

### i18n-content

Manage i18n content

#### Usage

Minimal usage is quite minimal

```html
<i18n-content>
  Hola mundo
</i18n-content>
```

This, by default won't do anything. There are two ways to translate the content

```json
{
  "en-US": {
    "greeting": "hello world"
  },
  "es-ES": {
    "greeting": "hola mundo"
  }
}
```

```js
// set global config
i18nContent.setSource('mainSourceFile.json')

// translate from the browser lang to en-US
i18nContent.setLang('en-US')

// or set all at once
i18nContent.setConfig({
  source: 'mainSourceFile.json',
  lang: 'en-US'
})
```

```html
<i18n-content tag="greeting">
</i18n-content>
```

This is the main way to do translations, through a json (or yaml) file. 
You need to mandatory set the static property of the source file, through 
the `setSource()` method. Other properties, like the lang will be set with 
default values, or local values through attributes.

Another way for translating is to set a trasnlator function, if this is 
set, it will be called for every component instance that hasn't a `tag` 
attribute set.

```js
i18nContent.setTranslator((text, from, to) => {
  // translate function against third party service/lib
})
```

### flipper-card

Simple card that flips on hover (or touch)

#### Usage

Simple do

```html
<flipper-card>
  <p slot="front">I'm in front</p>
  <img slot="back" src="back-image.png" />
</flipper-card>
```

The slots can be any element.

### fs-router

File system based front end router.

#### Usage

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