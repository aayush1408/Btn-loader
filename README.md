## Btn-loader

>Btn-loader is used to make beautiful loaders according to the user's needs in the simplest possible manner.

[![npm](https://img.shields.io/npm/dm/btn-loader.svg?style=flat-square)](https://www.npmjs.com/package/btn-loader)
[![npm](https://img.shields.io/npm/v/btn-loader.svg?style=flat-square)](https://www.npmjs.com/package/btn-loader)

- implemented with css. No canvas, png or jpg sprites messing around.
- less than 2KB when minified.
- optimised and production ready code in dist/ folder. 
- CDN provided at [unpkg](https://unpkg.com/btn-loader@1.0.1/dist/)
- no extra dependency used 
- Cross browser functionality

#### Installation steps

1) By CDN
```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/btn-loader@1.0.1/dist/app.css">
<script src="https://unpkg.com/btn-loader@1.0.1/dist/app.js" async></script>
```

1) By downloading the package

* first install with `npm install btn-loader` 
* then include these files in your html.

```html
<link rel="stylesheet" type="text/css" href="node-modules/btn-loader/dist/app.css">
<script src="node-modules/btn-loader/dist/app.js"></script>
```

##### Example

>First step is to use it as a class.

```html
<div>
   <div class="btn-loader">Button</div>
</div>
```
This will not generate the loader as dimmensions are required, which can be provided using size and thickness attributes.

### Other cool Attributes

>Vary the timer of the loader using ```timer```

```html
<div>
   <div class="btn-loader" timer="3">Button</div>
</div>
```
It keeps running the loader for 3 seconds.

>Vary the size of the loader using ```size```

```html
<div>
   <div class="btn-loader" size="xl">Button</div>
</div>
```
btn-loader has 4 sizes available
```xl```
```lg```
```md```
```sm```.

>Vary the thickness of the loader using ```thickness```

```html
<div>
   <div class="btn-loader" thickness="14">Button</div>
</div>
```
It increases the thickness of the loader by 14 pixels.


>Change the text after loading using ```text-after```

```html
<div>
   <div class="btn-loader" text-after="Done">Button</div>
</div>
```
After loading, the value changes to 'Done'.


>Change the color of the loader using ```color-head```

```html
<div>
   <div class="btn-loader" color-head="#E9C92D">Hex-Button</div>
   <div class="btn-loader" color-head="rgb('1.4','2.3','2')">Rgb-Button</div>
   <div class="btn-loader" color-head="green">Button</div>
</div>
```
It changes the color and btn-loader works with all color codes.


>Remove the button after loading using ```hide-after```

```html
<div>
   <div class="btn-loader" color-head="#E9C92D" hide-after="true">Button</div>
</div>
```
It hides the button after the loader completes.


### Creating a Super-Loader
> Super Loaders are those loaders which provide more than one color.

##### Example of a 4 star loader

```html
<div>
  <button class="btn-loader" color-head="red" color-bottom="#DC5B21" color-left="#70AB8F" color-right="#383127">Button</button>
</div>
```
##### Example of a 3 star loader

```html
<div>
  <button class="btn-loader" color-head="red" color-bottom="#DC5B21" color-left="#70AB8F">Button</button>
</div>
```
##### Example of a 2 star loader

```html
<div>
  <button class="btn-loader" color-head="red" color-bottom="#DC5B21">Button</button>
</div>
```
