import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ToDoUI from "./features/todos/ToDoUI";

function App() {

  return (
    <div className="App">
     {/* <Counter />*/}
      <ToDoUI/>
    </div>
  );
}

export default App;
