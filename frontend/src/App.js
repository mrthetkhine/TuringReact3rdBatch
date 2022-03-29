import logo from './logo.svg';
import React from "react";
import './App.css';
import Hello from "./components/Hello";
import Welcome from "./components/class_component/Welcome";
import AcceptComponent from "./components/AcceptComponent";
import Counter from "./components/class_component/Counter";
import ApiLoader from "./components/class_component/ApiLoader";
import EventComponent from "./components/class_component/EventComponent";
import ListItem from "./components/class_component/ListItem";
import Greeting from "./components/class_component/Greeting";
import Loader from "./components/class_component/Loader";
import FormDemo from "./components/form/FormDemo";
import BasicForm from "./components/formik/BasicForm";
import YupForm from "./components/formik/YupForm";
import Tab from "./components/tab/Tab";

function App() {
    let user ={
        name: "Someone",
        age : 37
    };
  let welcomeCom = <Welcome text={"Welcome to React"}/>;
  let data = ["Orange","Apple","Banana"];
  return (
    <div className="App">
      {/*  <Hello user={user}
                isAdmin={false}>
            <div>Children to Hello<script>alert('Hello')</script></div>
        </Hello>
        {welcomeCom}*/}
       {/* <AcceptComponent child={welcomeCom}/>
        <Counter inc={2}/>*/}
       {/* <Counter/>*/}
       {/*<ApiLoader/>*/}
      {/* <EventComponent/>*/}
     {/* <ListItem data={data}/>*/}
      {/*<Greeting isAdmin={true}></Greeting>*/}
    {/*  <Loader />*/}
   {/* <FormDemo/>*/}
   {/*<BasicForm/>*/}
      {/*  {<YupForm/>}*/}
      <Tab headers={data}>
            <div>
                <h1> Tab body 1</h1>
            </div>
          <div>
              <h1> Tab body 2</h1>
          </div>
          <div>
              <h1> Tab body 3</h1>
          </div>
      </Tab>
    </div>
  );
}

export default App;
