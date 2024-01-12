import { useTheme } from '../context/ThemeContext';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen rounded-lg ${
        theme === 'light' ? 'bg-white' : 'bg-black'
      }`}
    >
      <h1 onClick={toggleTheme} className="text-9xl hover:cursor-pointer">
        {theme === 'light' ? '☀️' : '🌛'}
      </h1>
    </div>
  );
}

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex items-center justify-center">
      <input
        type="checkbox"
        checked={theme === 'light'}
        onChange={toggleTheme}
      />
      <p className={theme === 'light' ? 'text-black' : 'text-white'}>
        Change Theme
      </p>
    </div>
  );
};

export default ThemeSwitcher;
