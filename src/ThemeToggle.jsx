import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <button onClick={handleToggleTheme} style={buttonStyle}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

const buttonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '10px 20px',
  cursor: 'pointer',
  backgroundColor: '#f0f0f0',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
};

export default ThemeToggle;
