import React, { useState } from 'react';
import Lamp from './components/lamp/Lamp';
import MQTT from './api/MQTT';
import './App.scss';

MQTT.connect();

function App() {
  const [lampOn, setLampOn] = useState(false);

  const turnLampOn = () => {
    MQTT.turnLampOn();
    setLampOn(!lampOn);
  }

  return (
    <div className="container">
      <div onClick={turnLampOn}>
        <Lamp on={lampOn} />
        <h2 style={{ textAlign: 'center', color: '#efefef' }}>
          {MQTT.isConnected}
        </h2>

        <h3 style={{ textAlign: 'center', color: '#efefef' }}>
          {MQTT.onMsgArrivedMessage}
        </h3>
      </div>
    </div>
  );
}

export default App;
