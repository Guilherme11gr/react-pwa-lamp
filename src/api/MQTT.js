import Paho from 'paho-mqtt'

class MQTT {

  static config = {
    host: 'test.mosquitto.org',
    port: 8080,
    clientId: `web-${new Date().getTime()}`,
    filter: 'iot/1337',
  }

  static mqttClient;

  static lastState = '0';

  static onMsgArrivedMessage;

  static onConnectionLostMessage;

  static isConnected;

  static connect = () => {
    const { host, port, clientId, filter } = this.config;

    this.mqttClient = new Paho.Client(host, port, clientId);

    this.mqttClient.connect({
      onSuccess: () => {
        console.log('Connected !');
        this.isConnected = 'Connected !';
        this.mqttClient.subscribe(filter);
      },
      onFailure: (err) => console.log('Error:', err)
    });

    this.mqttClient.onConnectionLost = this.onConnectionLost;

    this.mqttClient.onMessageArrived = this.onMessageArrived;
  }

  static onConnectionLost = (resObj) => {
    this.onConnectionLostMessage = `onConnectionLost: ${resObj.errorMessage}`;

    if (resObj.errorCode !== 0) {
      console.log(this.onConnectionLostMessage)
    }
  };

  static onMessageArrived = (message) => {
    this.onMsgArrivedMessage = `${message.destinationName} - ${message.payloadString}`;
    console.log(this.onMsgArrivedMessage);
    this.lastState = message.payloadString;
  }

  static turnLampOn = () => {
    const message = new Paho.Message(this.lastState === '0' ? '1' : '0');

    message.destinationName = this.config.filter;

    this.mqttClient.send(message);
  }
}

export default MQTT;