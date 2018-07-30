## Btn-loader

>Btn-loader is used to make beautiful and customizable loaders according to the user's needs in the simplest possible manner. Check out the example here <a href="http://btn-loader.surge.sh" target="_blank">Btn-loader</a>.

[![npm](https://img.shields.io/npm/dm/btn-loader.svg?style=flat-square)](https://www.npmjs.com/package/btn-loader)
[![npm](https://img.shields.io/npm/v/btn-loader.svg?style=flat-square)](https://www.npmjs.com/package/btn-loader)

>Check out the source code <a href="https://github.com/aayush1408/Btn-loader" target="_blank">here</a>, and feel free to contribute. 

- implemented with css. No canvas, png or jpg sprites messing around.
- less than 2KB when minified.
- optimised and production ready code in dist/ folder. 
- CDN provided at [unpkg](https://unpkg.com/btn-loader@1.0.5/dist/)
- no extra dependency used 
- Cross browser functionality

#### Installation steps

1) By CDN
```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/btn-loader@1.0.5/dist/app.css">
<script src="https://unpkg.com/btn-loader@1.0.5/dist/app.js" async></script>
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
   <button class="btn-loader">Button</button>
</div>
```
This will generate a default loader, to modify the default loader use the attributes given below.

### Cool Attributes

>Vary the timer of the loader using ```timer```

```html
<div>
   <button class="btn-loader" timer="3">Button</button>
</div>
```
It keeps running the loader for 3 seconds.

>Vary the size of the loader using ```size```

```html
<div>
   <button class="btn-loader" size="xl">Button</button>
</div>
```
btn-loader provides 4 sizes,
```xl```
```lg```
```md```
```sm```.

>Vary the thickness of the loader using ```thickness```

```html
<div>
   <button class="btn-loader" thickness="14">Button</button>
</div>
```
It increases the thickness of the loader by 14 pixels.


>Change the text after loading using ```text-after```

```html
<div>
   <button class="btn-loader" text-after="Done">Button</button>
</div>
```
After loading, the value changes to 'Done'.


>Change the color of the loader using ```color-head```

```html
<div>
   <button class="btn-loader" color-head="#E9C92D">Hex-Button</button>
   <button class="btn-loader" color-head="rgb('1.4','2.3','2')">Rgb-Button</button>
   <button class="btn-loader" color-head="green">Button</button>
</div>
```
It changes the color and btn-loader works with all color codes.


>Change the background color of the loader using ```bck-color```

```html
<div>
   <button class="btn-loader" bck-color="#E9C92D">Hex-Button</button>
</div>
```
It changes the background color and btn-loader works with all color codes.

>Remove the button after loading using ```hide-after```

```html
<div>
   <button class="btn-loader" color-head="#E9C92D" hide-after="true">Button</button>
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
