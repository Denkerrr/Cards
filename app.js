// подключение express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require("firebase-admin");
const serviceAccount = require("./server/serviceAccount.json");
const http = require('http').Server(app);
const io = require('socket.io')(http);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://xyteka.firebaseio.com"
});

app.use(express.static('public'))
    .use(cors({ origin: true }))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use('/api', require('./server/api.module.js'));

app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"))
    .get('*', (req, res) => res.status(404).json({
        success: false,
        data: `Not found ${req.url}`
    }));


io.on('connection', function (socket) {
    console.log('user connection');

    io.on('disconnect', function () {
        console.log('user disconnected');
    });
});

app.listen(3000);
