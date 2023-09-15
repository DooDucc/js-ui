import { TAGS_TEXT } from "./constants";

export const handleConvertTag = (tag) => {
  if (tag === TAGS_TEXT.h1 || tag === TAGS_TEXT.h2 || tag === TAGS_TEXT.h3 || tag === TAGS_TEXT.h4) {
    return tag;
  } else {
    if (tag === TAGS_TEXT.body) {
      return "p";
    } else {
      return "label";
    }
  }
};
