import React, { useState } from 'react';
import { useAuth } from '../../context/UserContext';

function Login() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleFormInput = (name, value) => {
    setForm(prev => {
      return { ...prev, [name]: value };
    });
  };

  const { setDisplayName, toggleLog, isLoggedIn } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.username || !form.password) {
      return alert('Please fill the inputs');
    }

    setDisplayName(form.username);
    toggleLog();
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border-2 p-4 rounded-md w-[30%]">
        <h1 className="text-xl mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className="border-2 p-2 rounded-md"
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={e => handleFormInput('username', e.target.value)}
          />
          <input
            className="border-2 p-2 rounded-md"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={e => handleFormInput('password', e.target.value)}
          />
          <button
            className="border-2 p-2 rounded-md hover:bg-green-300 transition-colors"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
