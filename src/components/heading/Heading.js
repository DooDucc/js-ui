import React from "react";
import { h } from "vue";
import { COLORS, FONTS, TAGS, FRAMEWORKS, FONTS_TEXT, TAGS_TEXT, handleConvertTag } from "../../base";

const Heading = (
  {
    type = FRAMEWORKS.REACT,
    className,
    id,
    tag = TAGS_TEXT.h1,
    font = FONTS_TEXT.bold,
    color = COLORS.gray85,
    align = "",
    children,
    ...props
  },
  { slots }
) => {
  const style = {
    fontWeight: FONTS[font].fontWeight,
    lineHeight: TAGS[tag].lineHeight,
    fontSize: TAGS[tag].fontSize,
    color: COLORS[color],
    textAlign: align ? align : "",
    padding: 0,
    margin: 0,
  };
  if (type === FRAMEWORKS.REACT) {
    return React.createElement(
      handleConvertTag(tag),
      {
        id: id ? id : "",
        className: className ? className : "",
        style,
        ...props,
      },
      children
    );
  } else if (type === FRAMEWORKS.VUE) {
    return h(
      handleConvertTag(tag),
      {
        id: id ? id : "",
        class: className ? className : "",
        style,
        ...props,
      },
      slots.default ? slots.default() : null
    );
  }
  // Angular
  else {
  }
};

export default Heading;
