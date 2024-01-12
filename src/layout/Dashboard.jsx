import React from 'react';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import routes from '../routes';
import { ThemeProvider } from '../context/ThemeContext';

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="p-4 xl:ml-80">
        <ThemeProvider>
          <Routes>
            {routes.map(({ name, path, element }) => (
              <Route key={name} exact path={path} element={element} />
            ))}
          </Routes>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Dashboard;
