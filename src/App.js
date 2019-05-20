import React, { useState } from 'react';
import Lamp from './components/lamp/Lamp';
import Paho from 'paho-mqtt';
import './App.scss';

function App() {
  const [lampOn, setLampOn] = useState(false);

  const config = {
    host: 'test.mosquitto.org',
    port: 8080,
    clientId: `web-${new Date().getTime()}`,
  }

  let lastState;

  const mqttClient = new Paho.Client(config.host, config.port, config.clientId);

  mqttClient.connect({
    onSuccess: () => {
      console.log('Connected !');
      mqttClient.subscribe('iot/1337');
    },
    onFailure: (err) => console.log('Error:', err)
  })

  mqttClient.onConnectionLost = (resObj) => resObj.errorCode !== 0 ? console.log(`onConnectionLost: ${resObj.errorMessage}`) : null;

  mqttClient.onMessageArrived = (message) => {
    console.log(`${message.destinationName} - ${message.payloadString}`);
    lastState = message.payloadString;
  }

  // const message = new Paho.Message(lastState === '0' ? '1' : '0');

  // message.destinationName = 'iot/1337';

  // mqttClient.send(message);


  return (
    <div className="container">
      <div onClick={() => setLampOn(!lampOn)}>
        <Lamp on={lampOn} />
      </div>
    </div>
  );
}

export default App;
