import Paho from 'paho-mqtt'

class MQTT {

  static config = {
    host: '35.166.18.111',
    port: 3033,
    clientId: `web-${new Date().getTime()}`,
    filter: 'iot/1337',
  }

  static mqttClient;

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
  }

  static onConnectionLost = (resObj) => {
    this.onConnectionLostMessage = `onConnectionLost: ${resObj.errorMessage}`;

    if (resObj.errorCode !== 0) {
      console.log(this.onConnectionLostMessage);
    }
  };

  static turnLampOn = (lampOn) => {
    const message = new Paho.Message(lampOn ? '1' : '0');

    message.destinationName = this.config.filter;

    this.mqttClient.send(message);
  }
}

export default MQTT;