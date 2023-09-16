import { FONTS_TEXT, TAGS_TEXT } from "./constants";

export const FONTS = {
  [FONTS_TEXT.regular]: {
    fontFamily: "'Regular SF Compact Rounded', sans-serif",
    fontWeight: 400,
  },
  [FONTS_TEXT.medium]: {
    fontFamily: "'Medium SF Compact Rounded', sans-serif",
    fontWeight: 500,
  },
  [FONTS_TEXT.bold]: {
    fontFamily: "'Bold SF Compact Rounded', sans-serif",
    fontWeight: 600,
  },
  [FONTS_TEXT.semibold]: {
    fontFamily: "'Semibold SF Compact Rounded', sans-serif",
    fontWeight: 700,
  },
};

export const TAGS = {
  [TAGS_TEXT.h1]: {
    fontSize: "38px",
    lineHeight: "46px",
  },
  [TAGS_TEXT.h2]: {
    fontSize: "30px",
    lineHeight: "38px",
  },
  [TAGS_TEXT.h3]: {
    fontSize: "24px",
    lineHeight: "32px",
  },
  [TAGS_TEXT.h4]: {
    fontSize: "20px",
    lineHeight: "28px",
  },
  [TAGS_TEXT.body]: {
    fontSize: "16px",
    lineHeight: "22px",
  },
  [TAGS_TEXT.caption]: {
    fontSize: "14px",
    lineHeight: "18px",
  },
  [TAGS_TEXT.note]: {
    fontSize: "12px",
    lineHeight: "16px",
  },
};
