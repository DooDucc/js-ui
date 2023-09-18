import React from "react";
import { h } from "vue";
import { COLORS, FRAMEWORKS, ICONS, SIZES_TEXT } from "../../base";

const Icon = ({
  type = FRAMEWORKS.REACT,
  id,
  className,
  icon,
  size = SIZES_TEXT.lg,
  direction = "",
  fill = COLORS.orange6,
  ...props
}) => {
  const attributes = {
    viewBox: `0 0 ${ICONS[icon].viewBox} ${ICONS[icon].viewBox}`,
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
  };
  const styleSVG = {
    width: ICONS[icon].size[size],
    height: ICONS[icon].size[size],
  };
  const stylePath =
    direction && ICONS[icon].rotate
      ? {
          transform: `rotate(${ICONS[icon].rotate[direction]}deg)`,
          transformOrigin: "50% 50%",
        }
      : {};
  if (type === FRAMEWORKS.REACT) {
    return React.createElement(
      "svg",
      {
        id: id ? id : "",
        className: className ? className : "",
        style: styleSVG,
        ...attributes,
        ...props,
      },
      ICONS[icon].paths.map((path, index) =>
        React.createElement(
          "path",
          {
            key: index,
            d: path,
            fill: COLORS.orange6,
            fillRule: "evenodd",
            clipRule: "evenodd",
            style: stylePath,
          },
          null
        )
      )
    );
  } else if (type === FRAMEWORKS.VUE) {
    return h(
      "svg",
      {
        id: id ? id : "",
        class: className ? className : "",
        style: styleSVG,
        ...attributes,
        ...props,
      },
      ICONS[icon].paths.map((path, index) =>
        h(
          "path",
          {
            key: index,
            d: path,
            fill: COLORS.orange6,
            fillRule: "evenodd",
            clipRule: "evenodd",
            style: stylePath,
          },
          null
        )
      )
    );
  }
  // Angular
  else {
  }
};

export default Icon;
