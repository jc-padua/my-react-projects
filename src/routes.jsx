import App from './App';
import Form from './projects/Form.jsx';
import ThemeSwitcher from './projects/ThemeSwitcher.jsx';
import Login from './projects/UserAuthentication/Login.jsx';

export const routes = [
  {
    path: '/form',
    name: 'Form',
    element: <Form />,
    topic: 'Controlled Component',
  },
  {
    path: '/theme-switcher',
    name: 'Theme Switcher',
    element: <ThemeSwitcher />,
    topic: 'Context API',
  },
  {
    path: '/user-authentication',
    name: 'User Authentication',
    element: <Login />,
    topic: 'Context API',
  },
];

export default routes;
