# React styles

## Overview
- [Default way](#default-way)
- [CSS Modules](#css-modules)
- [Preprocessors](#preprocessors)
- [CSS in JS](#css-in-js)
- [What to pick?](#what-to-pick)
- [Useful links](#useful-links)

## Default way

**Just a css:**

```tsx
import "./index.css";
const App = () => (
    <div className="App">My app</div>
)
```

**Pros:**

- Simple to read - regular CSS.
- Simple to use - regular CSS.
- No extra efforts - works out of the box.

**Cons:**

- Name conflicts:

```css
// App.css
.root { padding-top: 1em; }
// Card.css
.root { padding-top: 2em; }
// Result
.root { padding-top: ??; }
```

- Hard to reuse:

```css
.input:focus {
    outline: 1px solid brown;
}
 
.select:focus {
    outline: 1px solid brown;
}
```

- Hard to track unused code.

## CSS Modules

**Almost the same as plain css:**

```tsx
import styles "./app.module.css";
const App = () => <div className={styles.root}>My app</div>
```

But scoped to the certain component.

**Result:**

- No more conflicts with naming.
- Flat CSS without deep nesting.
- No more !important.
- Easy to track not used class.

## Preprocessors

**Pros:**

- Variables
- Convinient nesting
```scss
.radio:disabled { opacity: 0.33; }
.radio:focus { outline: 1px solid red; }
.radio {
    &:disabled { opacity: 0.33; }
    &:focus { outline: 1px solid red; }
}
```
- Mixins
```scss
@mixin theme($theme: white, $txt: black) {
    background: $theme;
    color:$txt;
 }
 
 .card {
     @include theme;
 }
```
- Math
```scss
@use "sass:math";
article[role="main"] {
  width: math.div(600px, 960px) * 100%;
}
```

**Cons:**

- Extra setup needed.
- Learning curve.
- Not compatible with pure css.

## CSS in JS

**Example from styled component:**

```tsx
import styled from "@emotion/styled";
 
const AppH1 = styled.h1`
    color: red;
`;
```

**Pros:**

- Absolute control - In CSS in JS approach - css is a part of your code. Thus you have full control on it. You can use variables, math, any kind of transformation. You can use props to control any css property.
- Naming - Within CSS in JS you will not spot naming issues. Class names are unique or not exists at all.
- Maintenance - As far as CSS turned into the code - it's much easier to track, rename or delete CSS without worrying that something will be broken.

**Cons:**

- Weird syntax.
- Extra tooling needed.
- Some perfomance hit.

### Libraries

- [Styled Components@5.3.5](https://github.com/styled-components/styled-components) - 36_000 ⭐, 3.5M downloads, 33.5kB
- [emotion/react@11.9.0](https://github.com/emotion-js/emotion) - 15_000 ⭐, 3M downloads, 21.2kB size

## What to pick?

- Pure CSS - naming conflicts 🤔
- CSS Modules - default ⭐
- CSS Modules + SCSS - for advanced ⭐ ⭐
- CSS in JS - in case of very complex UI when you need to control everything programmatically.

## Useful Links

- [CSS modules](https://css-tricks.com/css-modules-part-1-need/)
- [SASS - CSS with superpowers](https://sass-lang.com/)
- [How to add SASS to React](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)
- [Styled Components](https://styled-components.com/docs/basics#getting-started)
- [Styled Components extension](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)