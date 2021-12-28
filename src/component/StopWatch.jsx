import { useState } from "react";
import useStopWatch from "../hook/useStopWatch";
import { Button } from "@mui/material";

const StopWatch = () => {

    const {millisecond , StartTime , PauseTime , ReStartTime} = useStopWatch();
    return(
        <>
        <h2>StopWatch</h2>
        <h1>
        {Math.floor(millisecond / 360000) % 6} h :
          {Math.floor(millisecond / 60000) % 60} m :
          {Math.floor(millisecond / 1000) % 60} s :
          {Math.floor(millisecond / 10) % 100}
        </h1>
        <Button onClick={StartTime} variant="outlined">StartTime</Button>
        <Button onClick={PauseTime} variant="outlined">PauseTime</Button>
        <Button onClick={ReStartTime} variant="outlined">RestartTime</Button>
        </>
    )
}
export default StopWatch;