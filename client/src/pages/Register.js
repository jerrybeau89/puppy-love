import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/register', {
        email,
        username,
        password,
        passwordConfirm,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        type="password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        placeholder="Confirm Password"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
