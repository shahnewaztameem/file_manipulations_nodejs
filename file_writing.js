const fs = require('fs');

//create and write to file
fs.writeFile('data.txt', 'hello nodejs! This file has just been created.' , 'utf8', err => {
	if(err) throw err;
	console.log('file created!');
});

// append to existing file
fs.appendFile('data.txt', 'I am an appended text', 'utf8', err => {
	if(err) throw err;
	
})