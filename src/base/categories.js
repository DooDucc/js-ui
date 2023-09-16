import { COLORS } from "./colors";
import { CATEGORIES_TEXT } from "./constants";

export const CATEGORIES = {
  [CATEGORIES_TEXT.primary]: {
    border: `1px solid ${COLORS.orange6}`,
    color: COLORS.white,
    background: COLORS.orange6,
  },
  [CATEGORIES_TEXT.default]: {
    border: `1px solid ${COLORS.orange6}`,
    color: COLORS.orange6,
    background: COLORS.white,
  },
  [CATEGORIES_TEXT.link]: {
    color: COLORS.link,
    background: "none",
    border: "none",
  },
  [CATEGORIES_TEXT.text]: {
    color: COLORS.gray70,
    background: "none",
    border: "none",
  },
};
