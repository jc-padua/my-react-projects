import React from 'react';
import { useTheme } from '../context/ThemeContext';

function ThemeSwitcher() {
  const { theme } = useTheme();
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen rounded-lg ${
        theme === 'light' ? 'bg-white' : 'bg-black'
      }`}
    >
      <h1>{theme === 'light' ? '☀️' : '🌛'}</h1>
      <Switch />
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
