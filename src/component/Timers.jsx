import { useEffect, useState } from "react";
import { useStoptimer } from "../hook/useStopTimer"
import {Button} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./module.css"
const Timers = () => {
    const [ hour ,setHour] = useState(0);
    const [minute ,setMinute] = useState(0);
    const [second , setSecond] = useState(0);
     
     const {startTimer,pauseTimer,resetTimer,time,minutes,hours,setvalue,setminute,sethour} = useStoptimer({initvalue : second , initminute : minute , inithour : hour});
      useEffect(() => {
          sethour(hour);
          setminute(minute);
        setvalue(second);
    },[second,minute,hour])

     
     
     
    return(
        <div>
            <h2>Timer</h2>
            <input value={hours} onChange={(e) => setHour(e.target.value)}  />
            <input value={minutes} onChange={(e) => setMinute(e.target.value)} />
            <input placeholder="take time" value={time} onChange={(e) => setSecond(e.target.value)}  /> 
            <br/><br/>

             <Button variant="outlined" onClick={startTimer} size="sm">Start Timer</Button>
            
           <Button onClick={pauseTimer}>Stop Timer</Button>
           <Button onClick={resetTimer} startIcon={<DeleteIcon />}>ReStart Timer</Button>
        </div>
    )
}
export {Timers};