# @yerkopalma/ui

> Personal collection of ui components

## Install

```bash
$ npm install @yerkopalma/ui 
```

or use the tags

```html
<script type="module" src="https://unpkg/@yerkopalma/ui?module"></script>
<script nomodule src="https://unpkg/@yerkopalma/ui"></script>
```

if you need to loadn only some specific component

```html
<script type="module" src="https://unpkg/@yerkopalma/ui/app-shell.es.js"></script>
<script nomodule src="https://unpkg/@yerkopalma/ui/ui/app-shell.js"></script>
```


## Components

- [app-shell](#app-shell)
- flipper-card
- i18n-toggle
- i18n-content
- [md-view](#md-view)
- grid-menu

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

#### Attributes

- src: A string with the path to a remote markdown file, if not provided or
not found, inner content will be rendered