import React, { useState } from 'react';
import Lamp from './components/lamp/Lamp';
import MQTT from './api/MQTT';
import './App.scss';

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
        <h2 style={{ textAlign: 'center', color: '#efefef' }}>
          {MQTT.isConnected}
        </h2>

      </div>
        <h3 className="fade-in-bottom" style={{ textAlign: 'center', color: '#efefef' }}>
          <a style={{ color: '#efefef' }} href="https://github.com/brain-machine/minicurso-aws-2019">
           Ver no Git
          </a>
        </h3>
    </div>
  );
}

export default App;
