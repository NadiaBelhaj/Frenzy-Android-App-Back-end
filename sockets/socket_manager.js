const stateModel = require('../api/models/state');

//Events 
const DIS_CONNECTED = 'disconnect';
const INFORMATION = 'information';

exports.startListener = (socketIO) => {
    socketIO.on(CONNECTED, socket => {
        var userId = 0;
        socket.on(INFORMATION, id => {
            userId = id;

        });
        socket.on(DIS_CONNECTED, () => {

        });
    });
};