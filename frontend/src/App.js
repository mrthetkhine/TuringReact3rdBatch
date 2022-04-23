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
import FragmentDemo from "./components/fragment/FragmentDemo";
import FocusDemo from "./components/FocusDemo";
import LazyDemo from "./components/lazy/LazyDemo";
import MyContext from "./components/context/MyContext";
import ParentComponent from "./components/context/ParentComponent";
import UpdateContext from "./components/context/UpdateContext";
import FancyButtonDemo from "./components/forward_ref/FancyButtonDemo";
import logProps from "./components/hoc/logProps";
import DatePicker from "./components/thrid_party/DatePicker";
import RuntimeTypeDemo from "./components/runtime_type/RuntimeTypeDemo";
import RepeatDemo from "./components/function_as_child/RepeatDemo";
import Modal from "./components/portal/Modal";
import DefaultProperty from "./components/DefaultProperty";
import MouseTracker, {Cat} from "./components/render_prop/MouseTracker";
import UnControlled from "./components/uncontrolled/UnControlled";
import HookCounter from "./components/hooks/HookCounter";
import ComplexObject from "./components/hooks/ComplexObject";
import ContextHookDemo from "./components/hooks/ContextHookDemo";
import CounterWithState from "./components/hooks/reduce/CounterWithState";
import CounterWithReducer from "./components/hooks/reduce/CounterWithReducer";
import ToDoWithReducer from "./components/hooks/reduce/ToDoWithReducer";
import MemoHook from "./components/hooks/MemoHook";
import TextInputWithFocusButton from "./components/hooks/TextInputWithFocusButton";
import UseImperativeParent from "./components/hooks/UseImperativeParent";
import UseIdDemo from "./components/hooks/UseIdDemo";
import ToDoWithCustomReducer from "./components/hooks/ToDoWithCustomReducer";
import LoadUser from "./components/unit_testing/LoadUser";
let LoggedComponent = logProps(Welcome);
function App() {
    let user ={
        name: "Someone",
        age : 37
    };
  let welcomeCom = <Welcome text={"Welcome to React"}/>;
  let data = ["Orange","Apple","Banana"];

  return (
    <div className="App">
        <h1> learn react</h1>
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
    {/*    <YupForm/>}
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
      </Tab>*/}
      {/*<FragmentDemo/>*/}
      {/*  <FocusDemo/>*/}
    {/*  <LazyDemo/>*/}

    {/*<UpdateContext/>*/}
  {/* <FancyButtonDemo/>*/}
  {/* <LoggedComponent text={"This is label passed to Welcome"}
                    loading={false}/>*/}
  {/*  <DatePicker/>*/}
   {/*<RuntimeTypeDemo/>*/}
  {/* <Modal>
       <RepeatDemo/>
   </Modal>*/}
    {/*<DefaultProperty title={'4'}/>*/}
   {/* <MouseTracker render={mouse=> <Cat mouse={mouse}/>}/>*/}
   {/*<UnControlled/>*/}
  {/* <HookCounter/>*/}
  {/*  <ComplexObject/>*/}
  {/* <ContextHookDemo/>*/}
  {/*<CounterWithState/>*/}
  {/*<CounterWithReducer initialCount={20}/>*/}
  {/*<ToDoWithReducer/>*/}
  {/*<MemoHook/>*/}
{/*  <TextInputWithFocusButton/>*/}
{/*<UseImperativeParent/>*/}
{/*<UseIdDemo/>*/}
{/*<ToDoWithCustomReducer/>*/}
<LoadUser/>
    </div>
  );
}

export default App;
