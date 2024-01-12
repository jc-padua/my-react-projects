import React, { useState } from 'react';
import { useAuth } from '../../context/UserContext';

function Login() {
  const { toggleLog, setDisplayName } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    return username && password.length > 8;
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="flex flex-col gap-2"
        onSubmit={e => {
          e.preventDefault();
          setDisplayName(username);
          toggleLog();
        }}
      >
        <input
          className="border-2 p-2 rounded-md"
          type="text"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="border-2 p-2 rounded-md"
          type="password"
          name=""
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <button
          type="submit"
          disabled={!validateForm()}
          className={`bg-blue-600 text-white p-2 rounded-md ${
            !validateForm() ? 'opacity-50' : 'opacity-100'
          }`}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
