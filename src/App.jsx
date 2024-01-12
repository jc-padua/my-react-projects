import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import Dashboard from './layout/Dashboard';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Dashboard />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
