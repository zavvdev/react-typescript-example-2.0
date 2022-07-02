import "i18n";
import "styles/index.css";
import { ThemeProvider } from "react-jss";
import { Home } from "pages/Home/Home";
import { useAppTheme } from "styles/theme/hooks/useAppTheme";

export function App() {
  const appTheme = useAppTheme();

  return (
    <ThemeProvider theme={appTheme}>
      <Home />
    </ThemeProvider>
  );
}
