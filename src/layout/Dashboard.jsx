import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import routes from '../routes';
import { useAuth } from '../context/UserContext';
import Home from '../projects/UserAuthentication/Home';
import Login from '../projects/UserAuthentication/Login';
import LoginHOC from '../projects/HOC/Login';
import HomeWithAuth from '../projects/HOC/HomeHOC';

function Dashboard() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Navbar />
      <div className="p-4 xl:ml-80">
        <Routes>
          {routes.map(({ name, path, element }) => {
            if (name === 'User Authentication') {
              return (
                <Route
                  key={name}
                  exact
                  path={path}
                  element={isLoggedIn ? <Home /> : <Login />}
                />
              );
            } else if (name === 'Higher Order Component') {
              return (
                <Route
                  key={name}
                  exact
                  path={path}
                  element={isLoggedIn ? <HomeWithAuth /> : <LoginHOC />}
                />
              );
            } else {
              return <Route key={name} exact path={path} element={element} />;
            }
          })}
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
