import React from 'react';
import { useAuth } from '../../context/UserContext';

function Home() {
  const { toggleLog, displayName } = useAuth();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1>Hello, {displayName}!</h1>
      <button
        onClick={toggleLog}
        className="border-2 bg-red-400 rounded-md p-2 px-4 mt-10"
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
