import { appDarkTheme } from "view/styles/theme/dark";
import { appLightTheme } from "view/styles/theme/light";
import { AppTheme } from "view/styles/theme/types/theme";

export function useAppTheme(): AppTheme {
  const isDarkMode = false;
  const theme = isDarkMode ? appDarkTheme : appLightTheme;
  return theme;
}
