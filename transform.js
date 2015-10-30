var file = process.argv[2];
var newfile = process.argv[3];
var flag = process.argv[4];

var bitmap = require(__dirname + '/lib/bmpParse').readBMP(file);
var transform = require(__dirname + '/lib/transform');

bitmap.on('fileread', function(data) {
  transform.spliceAndWrite(data, newfile);
});

