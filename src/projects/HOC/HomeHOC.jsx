import React from 'react';
import { useAuth } from '../../context/UserContext';
import withAuth from '../../utils/withAuth';

function HomeHOC() {
  const { displayName, toggleLog } = useAuth();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10">
      <h1>You're logged in {displayName}</h1>
      <button
        onClick={toggleLog}
        className="border-2 px-4 py-2 rounded-md hover:bg-red-400 hover:text-white active:bg-red-800 active:scale-[0.9] transition-colors"
      >
        Logout
      </button>
    </div>
  );
}

const HomeWithAuth = withAuth(HomeHOC);

export default HomeWithAuth;
