const fs = require('fs');

// make dir
fs.mkdir("views", err => {
	if(err) throw err;
	console.log("new folder created");
	fs.writeFile("./views/new.txt","Hi I am a new file!", 'utf8', err=> {
		if(err) throw err;
		console.log("new file created");
	})
})

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