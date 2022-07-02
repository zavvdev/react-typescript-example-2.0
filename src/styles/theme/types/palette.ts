import { ColorType } from "styles/theme/types/common";

interface AppPalette {
  primary: {
    main: ColorType;
    dark: ColorType;
    light: ColorType;
  },
  gray: {
    light: ColorType;
  },
  black: {
    main: ColorType;
    light: ColorType;
  },
  white: {
    main: ColorType;
  }
}

export type { AppPalette };
