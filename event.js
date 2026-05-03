const EventEmitter = require('events');

const event = new EventEmitter();

event.on('login', (username) => {
    console.log(`${username} has logged in`);
});

event.on('login', (username) => {
    console.log(`Welcome ${username}!`);
});

event.emit('login', 'Chethana');
