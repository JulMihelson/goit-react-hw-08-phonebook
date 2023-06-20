import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

export const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
          />
        </label>
        <label>
          Password
          <input
            onChange={handleChange}
            value={password}
            type="password"
            name="password"
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
