import { useRef, useState } from "react"

const useStoptimer = ({initvalues = 0}) => {
    const [ time , setTime] = useState(initvalues);
   const ref = useRef(null);
    
   const startTimer = () => {
       if(!ref.current){
           ref.current = setInterval(() => {
               setTime((prev) => {
                   if(prev - 1 == 0){
                   pauseTimer();
                   }
                   return prev-1;
               })
           },1000)
       }
   }

   const setvalue = (value) => {
       setTime(value)
   }

   const pauseTimer = () => {
       clearInterval(ref.current);
       ref.current = null;
   }

   const resetTimer = () => {
       pauseTimer();
       setTime(initvalues);
   }

  return {startTimer,pauseTimer,resetTimer,time,setvalue}  
}
export {useStoptimer}