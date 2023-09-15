import React from "react";
import { h } from "vue";
import { COLORS, FONTS, TAGS, FRAMEWORKS, FONTS_TEXT, TAGS_TEXT, handleConvertTag } from "../../base";

const Heading = ({
  type = FRAMEWORKS.REACT,
  tag = TAGS_TEXT.h1,
  font = FONTS_TEXT.bold,
  color = COLORS.gray85,
  align = "",
  children,
}) => {
  if (type === FRAMEWORKS.REACT) {
    return React.createElement(
      handleConvertTag(tag),
      {
        style: {
          fontFamily: FONTS[font].fontFamily,
          fontWeight: FONTS[font].fontWeight,
          lineHeight: TAGS[tag].lineHeight,
          fontSize: TAGS[tag].fontSize,
          color: COLORS[color],
          textAlign: align ? align : "",
          padding: 0,
          margin: 0,
        },
      },
      children
    );
  } else if (type === FRAMEWORKS.VUE) {
    return h(
      handleConvertTag(tag),
      {
        style: {
          fontFamily: FONTS[font].fontFamily,
          fontWeight: FONTS[font].fontWeight,
          lineHeight: TAGS[tag].lineHeight,
          fontSize: TAGS[tag].fontSize,
          color: COLORS[color],
          textAlign: align ? align : "",
          padding: 0,
          margin: 0,
        },
      },
      children
    );
  }
  // Angular
  else {
  }
};

export default Heading;
