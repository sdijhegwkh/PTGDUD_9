import React from 'react';
import './App.css';
import Counter from './Counter';
import TodoList from './TodoList';
import ThemeToggle from './ThemeToggle';
import ShoppingCart from './ShoppingCart';
import Login from './Login';
import Welcome from './Welcome';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state) => state.theme);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className={`app ${theme}`}>
      {isLoggedIn ? <Welcome /> : <Login />}
      <hr />
      <Counter />
      <TodoList />
      <ThemeToggle />
      <hr />
      <ShoppingCart />
    </div>
  );
}

export default App;
