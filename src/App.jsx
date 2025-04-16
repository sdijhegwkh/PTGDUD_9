import React from 'react';
import './App.css';  
import Counter from './Counter';
import TodoList from './TodoList';
import ThemeToggle from './ThemeToggle';
import ShoppingCart from './ShoppingCart'; 
import { useSelector } from 'react-redux';  

function App() {
  const theme = useSelector((state) => state.theme);  

  return (
    <div className={`app ${theme}`}> 
      <Counter />
      <hr />
      <TodoList />
      <ThemeToggle /> 
      <hr />  
      <ShoppingCart /> 
    </div>
  );
}

export default App;
