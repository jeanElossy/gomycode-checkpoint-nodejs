let fs = require('fs');
// let fileName = process.argv[1];
    // console.log(fileName);
let contents;
try {
	contents = fs
				.readFileSync(process.argv[1], 'utf8')
				.toString().split('\n').length -1;
	console.log(contents);
}
catch (e) {
	console.log(e);
}

// console.log(process.argv)