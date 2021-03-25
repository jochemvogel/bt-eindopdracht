const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const PORT = 8001;

// const notification = require('./notifications')

io.on('connection', socket => {
    socket.on('matchUpdate', ({title, body}) => {
        console.log('test');
        // notification.newNotification(title, body);
    })
})

app.listen(PORT, () => console.log(`Socket listening on port ${8001}`));
