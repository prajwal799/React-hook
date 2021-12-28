import { useRef, useState } from "react"

const useStoptimer = ({initvalues = 0  , initminute = 0, inithour = 0}) => {
    const [ time , setTime] = useState(initvalues);
    const [hours , setHours] = useState(inithour);
    const [ minutes ,setMinutes] = useState(initminute);
   const ref = useRef(null);
    
   const startTimer = () => {
       if(!ref.current){
           ref.current = setInterval(() => {
               setTime((prev) => {
                   if(prev - 1 == 0 || prev == 0){
                       if(minutes >= 1){
                               setTime(59);
                                setMinutes(minutes-1);
                               }
                                   else if (hours >= 1) {
                                    setMinutes(59);
                                    setvalue(59);
                                    setHours(hours-1)
                                }

                               else {

                                   pauseTimer();
                               }
                            }
                            return prev-1;
                        })
                    },1000)
                }
            }
            
   const setvalue = (value) => {
       setTime(value)
   }
   const setminute = (value) => {
       setMinutes(value);
   }
   const sethour = (value) => {
       setHours(value);
   }
   

   const pauseTimer = () => {
       clearInterval(ref.current);
       ref.current = null;
   }

   const resetTimer = () => {
       pauseTimer();
       setTime(0);
       setMinutes(0)
       setHours(0);
   }

  return {startTimer,pauseTimer,resetTimer,time,minutes,hours,setvalue,setminute,sethour}  
}
export {useStoptimer}