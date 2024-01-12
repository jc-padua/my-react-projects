import React, { useState } from 'react';

const PasswordErrorMessage = () => {
  return (
    <p className="text-red-500">Password should have at least 8 characters</p>
  );
};

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState({
    value: '',
    isTouched: false,
  });
  const [role, setRole] = useState('role');

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== 'role'
    );
  };

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword({
      value: '',
      isTouched: false,
    });
    setRole('role');
  };

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Account created!');
    console.log(firstName, lastName, email, password, role);
    clearForm();
  };

  return (
    <div className="min-h-screen bg-slate-100 rounded-lg flex flex-col items-center justify-center">
      <form
        action=""
        onSubmit={handleSubmit}
        className="border-black border p-4 rounded-lg shadow-xl min-w-96 max-w-96"
      >
        <h2 className="text-4xl mb-5">Sign Up</h2>
        <fieldset className="flex flex-col">
          <label htmlFor="firstname">
            First name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="border rounded-sm border-gray-800 p-2"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="border rounded-sm border-gray-800 p-2"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="email">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border rounded-sm border-gray-800 p-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="password">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border rounded-sm border-gray-800 p-2"
            value={password.value}
            onChange={e => {
              setPassword({ ...password, value: e.target.value });
            }}
            onBlur={() => {
              setPassword({ ...password, isTouched: true });
            }}
          />
          {password.isTouched && password.value.length < 8 ? (
            <PasswordErrorMessage />
          ) : null}
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="role">
            Role <span className="text-red-600">*</span>
          </label>
          <select
            className="border rounded-sm border-gray-800 p-2"
            onChange={e => setRole(e.target.value)}
          >
            <option value="role">Role</option>
            <option value="individual">Individual</option>
            <option value="business">Business</option>
          </select>
        </fieldset>
        <button
          type="submit"
          className={`bg-blue-900 ${
            getIsFormValid() ? `opacity-100` : `opacity-50`
          } text-white rounded-md p-2 px-4 mt-4 w-full`}
          disabled={!getIsFormValid()}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Form;
