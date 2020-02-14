const fs = require('fs');

// Read directory
fs.readdir('./', (err,content) =>{
	if(err) throw err;
	console.log(content);
});

// Read file
fs.readFile('test.html', 'utf8',(err, content) => {
	if(err) throw err;
	console.log(content);
})