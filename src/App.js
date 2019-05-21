import React, { useState } from 'react';
import Lamp from './components/lamp/Lamp';
import MQTT from './api/MQTT';
import './App.scss';

MQTT.connect();

function App() {
  const [lampOn, setLampOn] = useState(false);

  MQTT.mqttClient.onMessageArrived = (message) => {
    const onMsgArrivedMessage = `${message.destinationName} - ${message.payloadString}`;

    console.log(onMsgArrivedMessage);

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
    </div>
  );
}

export default App;
