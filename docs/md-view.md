# md-view

Custom element for rendering markdown

## Usage

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

## Attributes

- src: A string with the path to a remote markdown file, if not provided or
not found, inner content will be rendered
- custom-elements: A list of custom elements that can be rendered along with your markdown.
