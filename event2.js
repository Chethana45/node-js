const fs = require('fs');
const EventEmitter = require('events');

const event = new EventEmitter();

event.on('fileSaved', (filename) => {
    console.log(`File ${filename} saved successfully!`);
});
fs.writeFile('test.txt', 'Hello Node Events!', (err) => {
    if (err) {
        console.log("Error writing file");
        return;
    }

    event.emit('fileSaved', 'test.txt');
});
