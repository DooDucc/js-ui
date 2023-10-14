import React from "react";
import { h } from "vue";
import { CATEGORIES, CATEGORIES_TEXT, COLORS, FRAMEWORKS, SIZES, SIZES_TEXT, handleSplitColor } from "../../base";

const Button = (
  {
    type = FRAMEWORKS.REACT,
    className,
    id,
    category = CATEGORIES_TEXT.primary,
    size = SIZES_TEXT.lg,
    color,
    children,
    ...props
  },
  { slots }
) => {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    cursor: "pointer",
    boxSizing: "border-box",
    opacity: props.disabled ? 0.4 : 1,
    pointerEvents: props.disabled ? "none" : "unset",
    userSelect: props.disabled ? "none" : "unset",
    fontWeight: SIZES[size].fontWeight,
    lineHeight: SIZES[size].lineHeight,
    fontSize: SIZES[size].fontSize,
    borderRadius: SIZES[size].borderRadius,
    height: SIZES[size].height,
    padding: SIZES[size].padding,
    background: color ? COLORS.white : CATEGORIES[category].background,
    borderColor: color ? COLORS[color] : category === CATEGORIES_TEXT.default ? COLORS.orange6 : "unset",
    borderWidth: category === CATEGORIES_TEXT.link || category === CATEGORIES_TEXT.text ? "none" : "1px",
    borderStyle: category === CATEGORIES_TEXT.link || category === CATEGORIES_TEXT.text ? "none" : "solid",
    color: color ? COLORS[color] : CATEGORIES[category].color,
  };
  if (type === FRAMEWORKS.REACT) {
    return React.createElement(
      "button",
      {
        id: id ? id : "",
        className: className ? className : "",
        style,
        ...props,
        onMouseOver: (e) => {
          if (!props.disabled) {
            if (category === CATEGORIES_TEXT.primary) {
              const { colorStr, colorIndex } = handleSplitColor(color ? color : "orange6");
              e.target.style.background = COLORS[`${colorStr}${colorIndex + 1}`];
            } else if (category === CATEGORIES_TEXT.default) {
              e.target.style.background = COLORS.orange1;
            } else {
              e.target.style.background = COLORS.gray4;
            }
          }
        },
        onMouseOut: (e) => {
          if (!props.disabled) {
            e.target.style.background = color ? COLORS.white : CATEGORIES[category].background;
          }
        },
      },
      children
    );
  } else if (type === FRAMEWORKS.VUE) {
    return h(
      "button",
      {
        id: id ? id : "",
        class: className ? className : "",
        style,
        ...props,
        onMouseover: (e) => {
          if (!props.disabled) {
            if (category === CATEGORIES_TEXT.primary) {
              const { colorStr, colorIndex } = handleSplitColor(color ? color : "orange6");
              if (colorIndex <= 7) {
                e.target.style.background = COLORS[`${colorStr}${colorIndex + 1}`];
                e.target.style.color = COLORS.white;
              } else {
                e.target.style.background = COLORS.orange2;
              }
            } else if (category === CATEGORIES_TEXT.default) {
              e.target.style.background = COLORS.orange6;
              e.target.style.color = COLORS.white;
            } else {
              e.target.style.background = COLORS.gray4;
            }
          }
        },
        onMouseout: (e) => {
          if (!props.disabled) {
            e.target.style.background = color ? COLORS.white : CATEGORIES[category].background;
            e.target.style.color = color ? COLORS[color] : CATEGORIES[category].color;
          }
        },
      },
      slots.default ? slots.default() : null
    );
  }
  // Angular
  else {
  }
};

export default Button;
