const path = require('path');

const config = {
  getProjectRoots() {
    return [path.resolve(__dirname), path.resolve(__dirname, '..')];
  },
};

module.exports = config;
