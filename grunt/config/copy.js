'use strict';

module.exports = {
  'font-awesome': {
    files: [
      {
        cwd: 'node_modules/font-awesome/fonts/',
        src: '**',
        expand: true,
        dest: 'fonts/'
      }
    ]
  }
};
