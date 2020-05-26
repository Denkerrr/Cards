const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const admin = require("firebase-admin");

const serviceAccount = require("../server/serviceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://xyteka.firebaseio.com"
});

app
    .set('Content-Type', 'application/json')
    .use(cors({origin: true}))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use('/route', require('./route.js'))
    .get('*', (req, res) => res.status(404).json({
        success: false,
        data: `Not found ${req.url}`
    }));

module.exports = app;

