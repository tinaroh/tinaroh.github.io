import * as color from "color";

export const palette = {
  primary: "#000000", // dark enough for 3 contrast ratio with white
  secondary: "#aa8777",
  interactive: "#719B09",
  background: "#f7e7cf",
  disabled: "#888888"
};

export function highlightColor(origColor: string): string {
  const colorObj = color(origColor);
  return colorObj
    .lighten(0.2)
    .saturate(0.1)
    .string();
  // return (colorObj.isLight()
  //   ? colorObj.darken(0.2)
  //   : colorObj.lighten(0.2)
  // ).string();
}
