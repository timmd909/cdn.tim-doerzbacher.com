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
  },
  'bootstrap': {
    files: [
      {
        cwd: 'node_modules/bootstrap/fonts/',
        src: '**',
        expand: true,
        dest: 'fonts/'
      }

    ]
  }
};
