# Shared Components and Code

This repository is to collect reusable preact Components and other code sippets
that are reused in different rbb-data projects.

You can add it as git submodule:
```bash
git submodule add https://[username]@docs.rbb-online.de/bitbucket/scm/rd/rbb-data-shared.git src/rbb-data-shared
```

Or just cope the code in your repository and change it to your needs.

## Component Conventions

### Structure

Dependencies should be provided as `props` or be contained in the components folder.  
[npm](https://www.npmjs.com/) dependencies should be listed in the `README.md`

*Components should not depend on any global variables such as `context` or stores.*  
An exeption to this rule is are components that rely on the [context provided by the react-leaflet Map component](https://react-leaflet.js.org/docs/en/intro.html#component-context). Those Components names should be prepended with Map (e.g. MapSearchResultMarker) and state this dependency in the `README.md`

#### index.jsx

Every subfolder in `/components` must have an `index.jsx` that contains an [preact.js](https://preactjs.com/)
component.  
The component should be the default export in the file so it can be imported like this:

```js
import ComponentName from 'rbb-data-shared/components/ComponentName'
```

#### README.md

Every subfolder in `/components` must have an `README.md` that provides a description of the component and documentation on how to use the component.

#### styles.sass

The styles for the component.

### Webpack / CSS Modules

To write the components we use [jsx](https://reactjs.org/docs/introducing-jsx.html).
To encapsulate the styles of a component we use [css-modules](https://github.com/css-modules/css-modules) and [sass](http://sass-lang.com/) as a css preprocessor.

To transpile all this into `css` and `js` that the browser understands we use [webpack](https://webpack.github.io/).

If you want to be able to import components from this repository in your own code you can use the `example.webpack.config` from this repository as a base for your own `webpack.config`

#### dependencies:

```
npm i webpack html-webpack-template html-webpack-plugin extract-text-webpack-plugin copy-webpack-plugin babel-polyfill whatwg-fetch
```

#### aliases:

There are some aliases in this webpack.config.js that assume the following folder structure:
```
data/
src/
├── components/
└── rbb-data-shared/
```

#### css modules:


[CSS Modules](https://github.com/css-modules/css-modules) are used to encapsulate the styles of a *Component*.

The basic idea is that you can import your styles in your js file and get an object with all classNames of the file.

E.g. the file `styles.sass`:
``` sass
  .heading
    font-weight: bold

    .colored
      color: blue

  .text
    font-size: 14px

    strong
      font-weight: bold

    .colored
      color: red
```

Can be imported like this:
``` js
import _ from './styles.sass'

<h1 class={_.heading}>Lorem<span class={_.colored}>ipsum</span></h1>
<p class={_.text}>
  Lorem <span class={_.colored}>ipsum</span>
  dolor <strong>sit</strong> amnet.
</p>
```

**Note:** that nesting of the classNames does not matter when importing them. And also only classNames are exported. This is just a mapping of the classNames to a unique global name.

`_` will look something like this:

``` js
{
  heading: 'ComponentName__heading__dj389',
  text: 'ComponentName__text__8zas8',
  colored: 'ComponentName__colored__da7e8',
}
```

And the generated css like this:

``` css
.ComponentName__heading__dj389 {
  font-weight: bold; }

  .ComponentName__heading__dj389 .ComponentName__colored__da7e8 {
    color: blue; }

.ComponentName__text__8zas8 {
  font-size: 14px; }

  .ComponentName__text__8zas8 strong {
    font-weight: bold; }

  .ComponentName__text__8zas8 .ComponentName__colored__da7e8 {
    color: red; }
```