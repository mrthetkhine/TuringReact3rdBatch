import logo from './logo.svg';
import React from "react";
import './App.css';
import Hello from "./components/Hello";
import Welcome from "./components/class_component/Welcome";
import AcceptComponent from "./components/AcceptComponent";
import Counter from "./components/class_component/Counter";


function App() {
    let user ={
        name: "Someone",
        age : 37
    };
  let welcomeCom = <Welcome text={"Welcome to React"}/>;
  return (
    <div className="App">
      {/*  <Hello user={user}
                isAdmin={false}>
            <div>Children to Hello<script>alert('Hello')</script></div>
        </Hello>
        {welcomeCom}*/}
        <AcceptComponent child={welcomeCom}/>
        <Counter/>
    </div>
  );
}

export default App;
