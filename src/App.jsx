import Student from "./Student"
import UserGreeting from "./UserGreeting"
import List from "./List";
import Button1 from "./Button1";
import ProfilePicture from "./ProfilePicture";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import MyComponent1 from "./MyComponent1";
import ColorPicker from "./ColorPicker";
import Counter1 from "./Counter1";
import MyComponent3 from "./MyComponent3";
import MyComponent2 from "./MyComponent2";
import MyComponent4 from "./MyComponent4";
import ToDoList from "./ToDoList";
import MyComponent5 from "./MyComponent5";
import MyComponent6 from "./MyComponent6";
import DigitalClock from "./DigitalClock";
import ComponentA from "./ComponentA";
import MyComponent7 from "./MyComponent7";
import Stopwatch from "./Stopwatch";
function App() {
  const fruits=[{id:1,name:"apple",calories:95},
                  {id:2,name:"orange",calories:45},
                  {id:3,name:"banana",calories:105},
                  {id:4,name:"coconut",calories:159},
                  {id:5,name:"pineapple",calories:37}]
  const vegetables=[{id:6,name:"potatoes",calories:110},
                  {id:7,name:"celery",calories:15},
                  {id:8,name:"carrots",calories:25},
                  {id:9,name:"corn",calories:63},
                  {id:10,name:"brocoli",calories:50}]
  return(
    <>
      <Student name="venkat" age={23} isStudent={true}></Student>
      <UserGreeting username="venkat" isloggedIn={true}></UserGreeting>
      {fruits.length > 0 ? <List items={fruits} category="FRUITS"></List>:null}
      {vegetables.length > 0 ? <List items={fruits} category="VEGETABLES"></List>:null}
      <Button1></Button1>
      <ProfilePicture></ProfilePicture>
      <MyComponent></MyComponent>
      <Counter></Counter>
      <MyComponent1></MyComponent1>
      <ColorPicker></ColorPicker>
      <Counter1></Counter1>
      <MyComponent3></MyComponent3>
      <MyComponent2></MyComponent2>
      <MyComponent4></MyComponent4>
      <ToDoList></ToDoList>
      <MyComponent5></MyComponent5>
      <MyComponent6></MyComponent6>
      <DigitalClock></DigitalClock>
      <ComponentA></ComponentA>
      <MyComponent7></MyComponent7>
      <Stopwatch></Stopwatch>
    </>
  );
}

export default App
