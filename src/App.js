import React, { useState } from 'react';
import Lamp from './components/lamp/lamp';
import './App.scss';

function App() {
  const [lampOn, setLampOn] = useState(false);

  return (
    <div className="container">
      <div onClick={() => setLampOn(!lampOn)}>
        <Lamp on={lampOn} />
      </div>
    </div>
  );
}

export default App;
