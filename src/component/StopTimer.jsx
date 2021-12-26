import { useEffect, useState } from "react";
import { useStoptimer } from "../hook/useStopTimer"
import {Button} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
const StopTimer = () => {
    const [value , setValue] = useState(0);
    
     const {startTimer,pauseTimer,resetTimer,time,setvalue} = useStoptimer({initvalue : value});
      useEffect(() => {
        setvalue(value)
    },[value])
      
    return(
        <div>
            <input placeholder="take time" value={time} onChange={(e) => setValue(e.target.value)}  /> 
            <br/><br/>

             <Button variant="outlined" onClick={startTimer} size="sm">Start Timer</Button>
            
           <Button onClick={pauseTimer}>Stop Timer</Button>
           <Button onClick={resetTimer} startIcon={<DeleteIcon />}>ReStart Timer</Button>
        </div>
    )
}
export {StopTimer};