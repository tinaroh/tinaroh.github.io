import { mediaQueries } from "src/presentation/theme/mediaQueries";
import { palette } from "src/presentation/theme/palette";
import { headerText, text } from "src/presentation/theme/text";

export const theme = {
  palette,
  text,
  headerText,
  mediaQueries
};

export type ThemeInterface = typeof theme;
