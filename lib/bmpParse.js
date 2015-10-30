var fs = require('fs');
var EventEmitter = require('events');
var EE = new EventEmitter;

var bmp;
var bmpJSON;
var bmpObj = {};

exports.readBMP = function(file){
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    bmp = new Buffer(data);
    bmpJSON = bmp.toJSON();
    bmpObj.fileSize = bmp.readUInt32LE(2);
    bmpObj.len = bmp.readUInt32LE(18);
    bmpObj.wdt = bmp.readUInt32LE(22);
    bmpObj.colorPalette = bmpJSON.data.slice(53, 1077);
    bmpObj.origArray = bmpJSON.data;
    bmpObj.buffer = bmp;
    EE.emit('fileread', bmpObj);
  });
  return EE;
}

exports.writeBMP = function(obj, file) {
  fs.fileWrite(file, obj, function{

  });
}
