import AppRouter from '@routers';
import { ThemeProvider } from '@contexts/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
