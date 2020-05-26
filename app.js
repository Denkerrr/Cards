// подключение express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require("firebase-admin");
const serviceAccount = require("./server/serviceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://xyteka.firebaseio.com"
});

app.use(express.static('public'))
    .use(cors({origin: true}))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use('/api', require('./server/api.module.js'));

app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"))
    .get('*', (req, res) => res.status(404).json({
        success: false,
        data: `Not found ${req.url}`
    }));

app.listen(3000);
