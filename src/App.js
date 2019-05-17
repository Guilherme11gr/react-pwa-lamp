import React, { useState } from 'react';
import NewLamp from './components/lamp/newLamp';
import './App.scss';
import Lamp from './components/lamp/lamp';

function App() {
  const [lampOn, setLampOn] = useState(false);

  return (
    <div className="container">
      <div onClick={() => setLampOn(!lampOn)}>
        <NewLamp on={lampOn} />
        <Lamp on={lampOn} />
      </div>
    </div>
  );
}

export default App;
