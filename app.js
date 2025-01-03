// подключение express
const express = require("express");
const bodyParser = require("body-parser");
const Eureka = require('eureka-js-client').Eureka;
// создаем объект приложения
const PORT = process.env.PORT || 3000;
const app = express();

const client = new Eureka({
    // application instance information
    instance: {
      app: process.env.APP || 'a-node-service',
      hostName: process.env.HOST_NAME || 'localhost',
      ipAddr: process.env.IP_ADDR || '127.0.0.1',
      statusPageUrl: 'http://localhost:3000',
      vipAddress: process.env.APP || 'a-node-service',
      port: {
        $: PORT,
        '@enabled': 'true',
      },
      dataCenterInfo: {
        '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
        name: 'MyOwn',
      },
      registerWithEureka: true,
      fetchRegistry: true,
    },
    eureka: {
      // eureka server host / port
      host: process.env.EUREKA_HOST || 'localhost',
      port: process.env.EUREKA_PORT || 8761,
      servicePath: process.env.EUREKA_SERVICE_PATH || '/eureka/apps',
    },
  });


// определяем обработчик для маршрута "/"
client.logger.level('debug');
client.start(error => {
  console.log(error || 'NodeJS Eureka Started!');
  const db = require("./app/models");
  db.sequelize.sync();

  app.get('/', (req, res) => {
    res.send('Hello World!\n');
    res.end();
  });
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("./app/routes/person.routers")(app);

app.listen(PORT);
console.log(`Running on ${PORT}`);