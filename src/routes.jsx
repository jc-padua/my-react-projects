import App from './App';
import Form from './projects/Form.jsx';
import ThemeSwitcher from './projects/ThemeSwitcher.jsx';
export const routes = [
  {
    path: '/form',
    name: 'Form',
    element: <Form />,
  },
  {
    path: '/theme-switcher',
    name: 'Theme Switcher',
    element: <ThemeSwitcher />,
  },
];

export default routes;
