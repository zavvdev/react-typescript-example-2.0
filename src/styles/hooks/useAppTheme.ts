import { appDarkTheme } from "styles/theme/dark";
import { appLightTheme } from "styles/theme/light";
import { AppTheme } from "styles/theme/types/theme";

export const useAppTheme = (): AppTheme => {
  const isDarkMode = false;
  const theme = isDarkMode ? appDarkTheme : appLightTheme;
  return theme;
};
