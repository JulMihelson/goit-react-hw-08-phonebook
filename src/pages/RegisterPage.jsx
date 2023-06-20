import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registartion } from 'redux/auth/authOperations';

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(registartion({ name, email, password }));
  };
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
      <div>Register</div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input onChange={handleChange} type="name" name="name" value={name} />
        </label>
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
