import 'i18n';
import 'styles/index.css';
import { ThemeProvider } from 'react-jss';
import { useAppTheme } from 'styles/hooks/useAppTheme';
import Home from 'pages/Home/Home';

function App() {
  const appTheme = useAppTheme();

  return (
    <ThemeProvider theme={appTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
