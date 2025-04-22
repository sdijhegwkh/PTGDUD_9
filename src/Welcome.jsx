import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './authSlice';

function Welcome() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className="welcome-container">
      <h2>Chào mừng, {user?.name}!</h2>
      <button onClick={() => dispatch(logout())}>Đăng xuất</button>
    </div>
  );
}

export default Welcome;
