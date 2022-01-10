import logo from './logo.svg';
import './App.css';
import Timer from './component/Timer';
import { Counter } from './component/Counter';
import Github from './component/Github';
import { Timers } from './component/Timers';
import StopWatch from './component/StopWatch';
import {useState} from "react";
import { Button } from '@mui/material';
import { Form } from './component/Form';

function App() {
  const [toggle ,setToggle] = useState(true);
  return (
    <div className="App">
      {/* <Timer />
      <Counter />
      <Github /> */}
      {/* <Github /> */}
      {/* <Button onClick={() => setToggle(true)}>Stop</Button>
      <Button onClick={() => setToggle(false)} >Timer</Button>
     {toggle ? <Timers /> : <StopWatch />} */}
      <Form />
    </div>
  );
}

export default App;
