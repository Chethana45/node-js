const fs = require('fs');

fs.writeFile('output.txt', 'Hello Node.js!', (err) => {
    if (err) {
        console.log("Error writing file");
        return;
    }
    console.log("File written successfully!");
});
