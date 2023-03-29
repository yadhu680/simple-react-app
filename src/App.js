import './App.css';
import Clock from './Clock';
import Greeting from './Greeting';
import TimeTicker from './TimeTicker';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div>
      <Clock date={new Date()} />
      <ToggleButton />
      <Greeting isLoggedIn />
      <TimeTicker />
    </div>
  );
}

export default App;
