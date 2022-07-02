import "i18n";
import "styles/index.css";
import { ThemeProvider } from "react-jss";
import { useAppTheme } from "styles/theme/hooks/useAppTheme";
import { Home } from "pages/Home/Home";

export function App() {
  const appTheme = useAppTheme();

  return (
    <ThemeProvider theme={appTheme}>
      <Home />
    </ThemeProvider>
  );
}
