var file = process.argv[2] || throw err;

var bitmap = require(__dirname + '/lib/bmpParse').readBMP(file);

bitmap.on('fileread', function(data) {
  console.log(data);
});

