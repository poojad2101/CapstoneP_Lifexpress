import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as usersService from '../../utilities/users-service';

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await usersService.login({ email, password });
      setUser(user);
      navigate('/dashboard', { replace: true });
    } catch {
      setError('Log In Failed - Try Again');
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password..."
        />
        <button type="submit" className="loginButton">
          Login
        </button>
      </form>
      <button className="loginRegisterButton">Register</button>
      {/* <Link className="link" to="register">Register</Link> */}
    </div>
  );
}
