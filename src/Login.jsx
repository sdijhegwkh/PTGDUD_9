import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authSlice';

function Login() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login({ name: username }));
    }
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập</h2>
      <input
        type="text"
        placeholder="Tên người dùng"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}

export default Login;
