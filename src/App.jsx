import AppRouter from '@routers';
import { ThemeProvider } from '@utils/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
