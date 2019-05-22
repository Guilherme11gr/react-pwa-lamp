import React, { useState } from 'react';
import Lamp from './components/lamp/Lamp';
import MQTT from './api/MQTT';
import './App.scss';
import BrainLamp from './components/brain-lamp/brain-lamp';

MQTT.connect();

function App() {
  const [lampOn, setLampOn] = useState(false);

  MQTT.mqttClient.onMessageArrived = (message) => {
    console.log(`${message.destinationName} - ${message.payloadString}`);

    setLampOn(message.payloadString === '1');
  }

  const turnLampOn = () => MQTT.turnLampOn(!lampOn);

  return (
    <div className="container">
      <div onClick={turnLampOn}>
        <Lamp on={lampOn} />
        <h3 style={{ textAlign: 'center', margin: '0.5rem', color: '#efefef' }}>
          {MQTT.isConnected}
        </h3>
        </div>

        <div className="link-container">
          <a className="fade-in-bottom link" href="https://github.com/brain-machine/minicurso-aws-2019">Ver no Git-Hub</a>
          <a className="fade-in-bottom" href="https://github.com/brain-machine/"><BrainLamp /></a>
        </div>
    </div>
  );
}

export default App;
