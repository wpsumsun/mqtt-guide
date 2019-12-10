const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://172.16.25.38:1888');

client.on('connect', function () {
  client.subscribe('presence');
  client.publish('presence', 'Hello mqtt ye');
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  client.end();
});