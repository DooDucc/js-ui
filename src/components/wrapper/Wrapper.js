import React from "react";
import { h } from "vue";
import { COLORS, FRAMEWORKS, DATA_TYPES } from "../../base";

const Wrapper = ({ type = FRAMEWORKS.REACT, className, id, pd, mg, bg, br, w, children, ...props }, { slots }) => {
  const isPdObj = typeof pd === DATA_TYPES.OBJECT;
  const isMgObj = typeof mg === DATA_TYPES.OBJECT;
  const style = {
    padding: !isPdObj && pd ? `${pd}px` : "",
    margin: !isMgObj && mg ? `${mg}px` : "",
    paddingTop: isPdObj && pd && pd.t ? `${pd.t}px` : pd,
    paddingRight: isPdObj && pd && pd.r ? `${pd.r}px` : pd,
    paddingLeft: isPdObj && pd && pd.l ? `${pd.l}px` : pd,
    paddingBottom: isPdObj && pd && pd.b ? `${pd.b}px` : pd,
    marginTop: isMgObj && mg && mg.t ? `${mg.t}px` : mg,
    marginRight: isMgObj && mg && mg.r ? `${mg.r}px` : mg,
    marginLeft: isMgObj && mg && mg.l ? `${mg.l}px` : mg,
    marginBottom: isMgObj && mg && mg.b ? `${mg.b}px` : mg,
    width: w ? (/^\d+(\.\d+)?$/.test(w) ? `${w}px` : w) : "",
    background: bg ? COLORS[bg] : "",
    borderRadius: br ? `${br}px` : "",
    boxSizing: "border-box",
  };
  if (type === FRAMEWORKS.REACT) {
    return React.createElement(
      "div",
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
      "div",
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

export default Wrapper;
