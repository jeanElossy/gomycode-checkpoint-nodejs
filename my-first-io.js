let fs = require('fs');
let fileName = process.argv[1];
    // console.log(fileName);
let buffer = null;
let numberLine = null;

try {
	buffer = fs.readFileSync(fileName, 'utf8');
	let lineArr = buffer.toString().split('\n');
    console.log(lineArr);
	numberLine = lineArr.length -1;
	console.log(numberLine);
}
catch (e) {
	console.log(e);
}