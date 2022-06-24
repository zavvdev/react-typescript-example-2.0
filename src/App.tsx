import 'styles/index.css';
import Button from 'components/Button/Button';
import { ThemeProvider } from 'react-jss';
import { useAppTheme } from 'styles/hooks/useAppTheme';

function App() {
  const appTheme = useAppTheme();

  return (
    <ThemeProvider theme={appTheme}>
      <div>
        Hello, World!
        <Button>
          Button
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
