import { useRef } from "react";
import React , {useState} from "react"

const useStopWatch = () => {
    const [millisecond , setMilliSecond] = useState(0);
     const ref = useRef(null);
    const StartTime = () => {
        if(!ref.current){
            ref.current = setInterval(() => {
               setMilliSecond((prev) => {
                 return  prev+10;
               })
            },10)
        }
    }

    const PauseTime = () => {
        clearInterval(ref.current);
        ref.current = null;
    }

    const ReStartTime = () => {
        PauseTime();
        setMilliSecond(0);
    }

    return {millisecond , StartTime , PauseTime , ReStartTime}
}

export default useStopWatch;