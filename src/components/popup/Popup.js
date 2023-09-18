import React from "react";
import { h } from "vue";
import { COLORS, FRAMEWORKS } from "../../base";

const Popup = (
  {
    type = FRAMEWORKS.REACT,
    className,
    id,
    isShow = false,
    isCanCloseWhenClikOutSide = true,
    onClose = () => {},
    children,
  },
  { slots }
) => {
  const stylePopupWrapper = {
    position: "fixed",
    width: "100%",
    height: isShow ? "100%" : "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0, 0.5)",
    overflow: "hidden",
    opacity: isShow ? 1 : 0,
    visibility: isShow ? "visible" : "hidden",
    transition: "all 0.5s ease",
    zIndex: 999,
  };
  const stylePopupContent = {
    position: "relative",
    maxHeight: "100%",
    cursor: "default",
    minWidth: "200px",
    minHeight: "150px",
    background: COLORS.white,
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
  };
  if (type === FRAMEWORKS.REACT) {
    return React.createElement(
      "div",
      {
        style: stylePopupWrapper,
        onClick: () => isCanCloseWhenClikOutSide && onClose(),
      },
      React.createElement(
        "div",
        {
          id: id ? id : "",
          className: className ? className : "",
          style: stylePopupContent,
          onClick: (e) => e.stopPropagation(),
        },
        children
      )
    );
  } else if (type === FRAMEWORKS.VUE) {
    return h(
      "div",
      {
        style: stylePopupWrapper,
        onClick: () => isCanCloseWhenClikOutSide && onClose(),
      },
      h(
        "div",
        {
          id: id ? id : "",
          class: className ? className : "",
          style: stylePopupContent,
          onClick: (e) => e.stopPropagation(),
        },
        slots.default ? slots.default() : null
      )
    );
  }
  // Angular
  else {
  }
};

export default Popup;
