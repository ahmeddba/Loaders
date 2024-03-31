import logo from './logo.svg';
import './App.css';
import Load1 from './Components/Load1';
import Load from './Components/Load';
import Prototype1 from './Pages/Prototype1';
import Prototype2 from './Pages/Prototype2';
import { useState } from 'react';

function App() {
  const [switchh , setSwitchh] = useState(true)
  setInterval(() => {
    setSwitchh((prev) => !prev)
  },10000)

  return (
    <div className="App">
      {
        switchh ?
          <Prototype2/>
        :
          <Prototype1/>
      }
    </div>
  );
}

export default App;
