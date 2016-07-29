'use strict';

var grunt = require('grunt');
var _ = require('lodash');

var files = grunt.file.expand('src/less/*.less');

var LESS_FILES = {};

_.forEach(files, function (file) {
  var outputFilename = file
    .replace(/src\/less\//, 'css/')
    .replace(/\.less$/, '.css');
  LESS_FILES[outputFilename] = file;
});

module.exports = {
  all: {
    options: {
      compress: true,
      sourceMap: true,
      sourceMapRootpath: '../'
    },
    files: LESS_FILES
  }
};
