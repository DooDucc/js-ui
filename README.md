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

## Usage

### _Heading Component_

**_- React:_**

```tsx
import { Heading } from "js-ui-clevai";
<Heading type="react" tag="h2" font="semibold" color="orange1">
  Clevai
</Heading>;
```

**_- Vue:_**

```tsx
import { Heading } from "js-ui-clevai";
<Heading :type="'vue'" :tag="'h1'" :color="'otherElectricViolet'" :font="'semibold'">
  Clevai
</Heading>
```

**_- Props:_**

type: [type](#type-section)

id: "" **(optional)**

className: "" **(optional)**

tag: "h1" | "h2" | "h3" | "h4" | "body" | "caption" | "note"

font: "semibold" | "bold" | "medium" | "regular"

color: [color](#color-section) **(optional)**

align: "center" | "start" | "end" **(optional)**

onClick, onMouseOver, ...

### _Button Component_

**_- React:_**

```tsx
import { Button } from "js-ui-clevai";
<Button type="react" category="default" size="lg" color="otherRoyalBlue" onClick={() => setIsShow(true)}>
  Clevai
</Button>;
```

**_- Vue:_**

```tsx
import { Button } from "js-ui-clevai";
<Button :type="'vue'" :category="'default'" :size="'md'" @click="() => console.log("Ducdc")">Clevai</Button>
```

**_- Props:_**

type: [type](#type-section)

id: "" **(optional)**

className: "" **(optional)**

category: "primary" | "default" | "text" | "link"

size: "xl" | "lg" | "md" | "sm"

color: [color](#color-section) **(optional)**

onClick, onMouseOver, ...

### _Wrapper Component_

**_- React:_**

```tsx
import { Wrapper } from "js-ui-clevai";

<Wrapper type="react" pd={{ t: 20 }} mg={{ b: 40 }} bg="green4" br="9" w={400.5}>
  something (Heading, Button, ...)
</Wrapper>;
```

**_- Vue:_**

```tsx
import { Wrapper } from "js-ui-clevai";

<Wrapper
    :type="'vue'"
    :mg="30"
    :pd="{ r: 20, b: 30 }"
    :br="'10'"
    :bg="'blue6'"
    @click="console.log('ducdc')"
>
  something (Heading, Button, ...)
</Wrapper>
```

**_- Props:_**

type: [type](#type-section)

id: "" **(optional)**

className: "" **(optional)**

mg: string | number | {t?: number, r?: number, b?: number, l?: number} **(margin)** **(optional)**

pd: string | number | {t?: number, r?: number, b?: number, l?: number} **(padding)** **(optional)**

br: number **(border-radius)** **(optional)**

bg: [color](#color-section) **(background)** **(optional)**

onClick, onMouseOver, ...

### _Icon Component_

**_- React:_**

```tsx
import { Icon } from "js-ui-clevai";

<Icon type="react" icon="volume" direction="" size="xl" />;
```

**_- Vue:_**

```tsx
import { Icon } from "js-ui-clevai";

<Icon :type="'vue'" :icon="'chevron'" :direction="'left'" :size="'xl'" />
```

**_- Props:_**

type: [type](#type-section)

id: "" **(optional)**

className: "" **(optional)**

icon: [icon](#icon-section)

direction: "left" | "right" | "top" | "bottom" **(with direction icon, you should add "direction" prop)** **(optional)**

size: "xl" | "lg" | "md" | "sm"

onClick, onMouseOver, ...

### _Popup Component_

**_- React:_**

```tsx
import { useState } from "react";
import { Button, Popup } from "js-ui-clevai";

const App = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <Button type="react" category="default" size="lg" color="otherRoyalBlue" onClick={() => setIsShow(true)}>
        ducdc
      </Button>
      <Popup type="react" isShow={isShow} isCanCloseWhenClikOutSide={true} onClose={() => setIsShow(false)}>
        something (Heading, Button, ...)
      </Popup>
    </>
  );
};

export default App;
```

**_- Vue:_**
<template>
<Button :type="'vue'" :category="'default'" :size="'md'" @click="isShowPopup = true">ducdc</Button>
<Popup :type="'vue'" :isShow="isShowPopup" :isCanCloseWhenClikOutSide="true" :onClose="() => (isShowPopup = false)">
something (Heading, Button, ...)
</Popup>
</template>

<script setup>
import {  Button, Popup } from "js-ui-clevai";
import { ref } from "vue";

const isShowPopup = ref(false);
</script>

**_- Props:_**

type: [type](#type-section)

isShow: boolean

isCanCloseWhenClikOutSide: boolean **(hide Popup when click on overlay)** **(optional)**

onClose: () => {} **(fucncion handle hide Popup)**

### Type section (default: "react")

<a name="type-section"></a>

```
react,
vue,
angular,
```

### Color section (default: "orange6")

<a name="color-section"></a>

```
white: "#ffffff",
gray: "#000810",
primary: "#ff8c05",
success: "#28b44f",
warning: "#ffb23e",
error: "#ed1d31",
information: "#ff8c05",
link: "#0000ff",
otherJava: "#64dcc3",
otherBrightTurquoise: "#51cefa",
otherElectricViolet: "#7a73ff",
otherRoyalBlue: "#2b70c9",
otherRed: "#ff3b30",
orange9: "#6b3a00",
orange8: "#9e5500",
orange7: "#d17100",
orange6: "#ff8c05",
orange5: "#ffa438",
orange4: "#ffbb6b",
orange3: "#ffd39e",
orange2: "#ffead1",
orange1: "#fff6eb",
blue9: "#06326a",
blue8: "#08489b",
blue7: "#0b5fcb",
blue6: "#1877f2",
blue5: "#4893f5",
blue4: "#78aff8",
blue3: "#a8ccfa",
blue2: "#cfe3fc",
blue1: "#ecf4fe",
green9: "#0c3618",
green8: "#16602a",
green7: "#1f8a3c",
green6: "#28b44f",
green5: "#3bd365",
green4: "#65dc86",
green3: "#8fe6a7",
green2: "#b8efc7",
green1: "#eefbf2",
crimson9: "#5e0810",
crimson8: "#840b17",
crimson7: "#bd0f21",
crimson6: "#ed1d31",
crimson5: "#ef3c4d",
crimson4: "#f36876",
crimson3: "#ffc2c8",
crimson2: "#ffd6da",
crimson1: "#fdecee",
corn9: "#4c3c01",
corn8: "#7e6401",
corn7: "#b08b02",
corn6: "#e2b203",
corn5: "#fcc603",
corn4: "#fdd340",
corn3: "#feedae",
corn2: "#fff2cc",
corn1: "#fffaeb",
gray: "#000810",
gray85: "#262d34",
gray70: "#4d5358",
gray60: "#666b70",
gray45: "#8c9093",
gray30: "#b3b5b8",
gray15: "#d9dadb",
gray10: "#e6e7e8",
gray4: "#f5f5f6",
```

### Icon section

<a name="icon-section"></a>

```
chevron,
triangle,
triangleFill,
triangleSmallFill,
triangleBarFill,
arrowCircle,
chevronCircle,
chevronCircleFill,
close,
closeCircle,
closeFillCircle,
gift,
giftFill,
book,
bookFill,
heart,
heartFill,
warning,
warningFill,
upload,
uploadFill,
setting,
settingFill,
crown,
crownFill,
questionMark,
questionMarkFill,
clock,
chestnut,
logout,
star,
starFill,
mission,
education,
dot,
mute,
muteFill,
volume,
volumeFill,
send,
sendFill,
calendar,
xp,
eyeV1,
eyeSlashV1,
eyeV2,
eyeSlashV2,
lesson,
```
