import App from './App';
import FetchAPI from './projects/FetchAPI.jsx';
import Form from './projects/Form.jsx';
import Task from './projects/Task.jsx';
import ThemeSwitcher from './projects/ThemeSwitcher.jsx';
import Login from './projects/UserAuthentication/Login.jsx';
import LoginHOC from './projects/HOC/Login.jsx';

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
  {
    path: '/fetch-api',
    name: 'Fetch API',
    element: <FetchAPI />,
    topic: 'Fetch API & useEffect',
  },
  {
    path: '/counter',
    name: 'Counter',
    element: <Task />,
    topic: 'Using useReducer',
  },
  {
    path: '/higher-order-component',
    name: 'Higher Order Component',
    element: <LoginHOC />,
    topic: 'Higher Order Component',
  },
];

export default routes;
