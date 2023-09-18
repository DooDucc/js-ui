# clevai-ui

> This library can be used for React, Vue, Angular which are based on Javascript

[![NPM](https://img.shields.io/npm/v/js-ui-clevai.svg)](https://www.npmjs.com/package/js-ui-clevai) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install js-ui-clevai
```

```bash
yarn add js-ui-clevai
```

[color](#color-section)

## Usage

### _Heading Component_

**_React:_**

```tsx
import { Heading } from "js-ui-clevai";
<Heading type="react" tag="h2" font="semibold" color="orange1">
  Clevai
</Heading>;
```

### - Vue:

```tsx
import { Heading } from "js-ui-clevai";
<Heading :type="'vue'" :tag="'h1'" :color="'otherElectricViolet'" :font="'semibold'">
  Clevai
</Heading>
```

### - Props:

type: type,
id: "",
className: "",
tag: "h1" | "h2" | "h3" | "h4" | "body" | "caption" | "note",
font: "semibold" | "bold" | "medium" | "regular",
color: [color](#color-section),
align: "center" | "start" | "end"

### _Button Component_

### _Wrapper Component_

### _Icon Component_

### _Popup Component_

```
type: "react" | "vue"
```

<a name="color-section"></a>

```
color: color
```
