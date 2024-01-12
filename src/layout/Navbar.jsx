import React from 'react';
import routes from '../routes';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <aside className="bg-white shadow-md shadow-slate-400 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl ">
      <div className="relative p-4">
        <h1 className="text-center text-xl">My Projects</h1>
      </div>
      <div className=" m-4">
        <ul className="flex flex-col gap-4">
          {routes.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className="bg-slate-700 text-white block p-3 rounded-lg"
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Navbar;
