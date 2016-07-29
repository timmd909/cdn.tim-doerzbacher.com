'use strict';

var path = require('path');
var glob = require('glob');
var _ = require('lodash');

var GRUNT_CONFIG_DIR = path.join(process.cwd(), 'grunt/config');
var GRUNT_TASK_DIR = path.join(process.cwd(), 'grunt/task');

module.exports = function(grunt) {
  //
  // Load external configuration files
  //
  require('load-grunt-config')(grunt, {
    configPath: GRUNT_CONFIG_DIR,
    data: {
      pkg: grunt.file.readJSON('package.json')
    }
  });

  //
  // Load external task defintions
  //
  var tasks = glob.sync(GRUNT_TASK_DIR + '/**.js');
  _.forEach(tasks, function (filename) {
    require(filename)(grunt);
  });

};
