# side-nav

Side navigation with mobile support

## Usage

Simple do

```html
<side-nav>
  <a href="/docs/app-shell" title="App Shell">App Shell</a>
  <a href="/docs/flipper-card" title="Flipper card">Flipper card</a>
  <a href="/docs/md-view" title="Md View">Md View</a>
  <a href="/docs/fs-router" title="Fs Router">Fs Router</a>
</side-nav>
```

The slots can be any element.

The side nav will hide on mobile, actually will set `display` to `none` for 
every link inside the component, and will show them again on click or tap on 
the aside element container.

## Style

You have the option of use the `custom-style` attribute, which loads a css 
stylesheet for the shadow root of this element (so you can use the `:host` pseudo 
element)