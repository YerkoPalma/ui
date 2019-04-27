# app-shell

Custom element to manage dynamic content of your app

## Usage

Generally you only need to use `app-shell` in your markup

```html
<app-shell>
  default view
</app-shell>
```

Content inside the elemnt is the default view, but you can also 
set default view with attributes.

## Attributes

- controller: A css selector used to define the element that 
contains the navigation links. Links must be anchor tags with an href 
attribute, this attribute can be an html (remote or local, since it 
is `fetch`ed) or markdown file.
- default: The default view. A relative path to a markdown or 
html file which will be rendered when a link inside the 
controller is not found. Decision order when navigation happens is
link href > default attribute > element content
