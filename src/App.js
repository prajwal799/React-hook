import logo from './logo.svg';
import './App.css';
import Timer from './component/Timer';
import { Counter } from './component/Counter';
import Github from './component/Github';
import { StopTimer } from './component/StopTimer';

function App() {
  return (
    <div className="App">
      {/* <Timer />
      <Counter />
      <Github /> */}
      <StopTimer />
    </div>
  );
}

export default App;
