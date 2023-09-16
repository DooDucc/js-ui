import { TAGS_TEXT } from "./constants";

export const handleConvertTag = (tag) => {
  if (tag === TAGS_TEXT.h1 || tag === TAGS_TEXT.h2 || tag === TAGS_TEXT.h3 || tag === TAGS_TEXT.h4) {
    return tag;
  } else {
    if (tag === TAGS_TEXT.body || tag === TAGS_TEXT.caption) {
      return "p";
    } else {
      return "label";
    }
  }
};

export const handleSplitColor = (color) => {
  const matches = color.match(/([a-zA-Z]+)([0-9]+)/);
  if (matches) {
    const colorStr = matches[1];
    const colorIndex = +matches[2];
    return {
      colorStr,
      colorIndex,
    };
  } else {
    return "";
  }
};
