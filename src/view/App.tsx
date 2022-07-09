import "view/i18n";
import { ThemeProvider } from "react-jss";
import "view/styles/index.css";
import { Router } from "view/router/Router";
import { useAppTheme } from "view/styles/theme/hooks/useAppTheme";

export function App() {
  const appTheme = useAppTheme();

  return (
    <ThemeProvider theme={appTheme}>
      <Router />
    </ThemeProvider>
  );
}
