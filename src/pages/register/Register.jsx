import './Register.css';
import { signUp } from '../../utilities/users-service';
import { useState } from 'react';

export default function Register({ setUser }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   error: '',
  // });

  const register = async (username, email, password) => {
    const response = await signUp({ username, email, password });
    console.log(response);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(username, email, password);
  //   register(username, email, password);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {};
      delete formData.error;
      const user = await signUp({username, email, password});
      setUser(user);
      console.log('my user is , ', user);
    } catch {
      setError('Sign Up Failed - Try Again');
      // setFormData({ ...formData, error: 'Sign Up Failed - Try Again' });
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password..."
        />
        <button type="submit" className="registerButton">
          Register
        </button>
      </form>
      <button className="registerLoginButton">Login</button>
      {/* <Link className="link" to="login">Login</Link> */}
    </div>
  );
}
