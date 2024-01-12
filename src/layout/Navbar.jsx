import React from 'react';
import routes from '../routes';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <aside className="bg-white shadow-md shadow-slate-400 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 -translate-x-80  rounded-xl transition-transform duration-300 xl:translate-x-0 ">
      <div className="relative p-4">
        <h1 className="text-center text-xl">My Projects</h1>
      </div>
      <div className=" m-4">
        <ul className="flex flex-col gap-4">
          {routes.map(({ name, path, topic }) => (
            <li key={name}>
              <sub>{topic}</sub>
              <NavLink
                to={path}
                className="bg-slate-700 text-white block p-3 mt-2 rounded-lg"
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
