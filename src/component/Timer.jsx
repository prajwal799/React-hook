import { useTimer } from "../hook/useTimer";

const Timer = () => {
  const {value,pauseTimer,resetTimer,startTimer} = useTimer({initValue:20});
  return(
    <>
    <h2>Timer</h2>
    <h2>{value}</h2>
    <button onClick={startTimer}>StartTimer</button>
    <button onClick={pauseTimer}>PauseTimer</button>
    <button onClick={resetTimer}>ResetTimer</button>

    </>

  )
}
export default Timer;