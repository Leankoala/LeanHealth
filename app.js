const express = require('express');

const HealthStatus = require("./src/HealthStatus");

const app = express();

const argv = require('yargs').argv;

const port = argv['port'] || 80;

app.use(express.json()); // to support JSON-encoded bodies

app.get('/self', function (req, res) {

    res.header("Content-Type", "application/health+json");

    let healthStatus = new HealthStatus('pass', 'The health.js server is running on port ' + port);
    healthStatus.setDescription('Checks if the health.js server is working.')

    res.send(JSON.stringify(healthStatus.toJson(), null, 4));
});

app.listen(port, function () {
    console.log('health.js stated. Listening on port ' + port);
});