import './App.css';
import { useState } from 'react';
import ALLGun from './Components/ALLGun/ALLGun';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);

  const countIncrease=()=>{
    setCount(count +1);
  }
  return (
    <div className="App">
      <Navbar count = {count} />
      <ALLGun countIncrease = {countIncrease}></ALLGun>
    </div>
  );
}

export default App;
