module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  var config = require('./config.json');
  var pathStr = "PATH='$PATH:/usr/local/bin'";
  var currentPath = config.deploy.path + "/current";

  shipit.initConfig({
    default: {
      workspace: 'tmp',
      deployTo: config.deploy.path,
      repositoryUrl: 'https://github.com/JoshSpears3/Portfolio',
      ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 2,
      key: '/Users/joshspears/.ssh/joshspears.pem',
      shallowClone: true
    },
    production: {
      servers: config.deploy.username + '@' + config.deploy.hostname
    }
  });

  // this task runs an NPM install remotely to install dependencies
  shipit.blTask('install', function () {
    return shipit.remote(pathStr + " && cd " + currentPath + " && npm install &> /dev/null");
  });

  // this task starts the server in a screen with a name set in the config
  shipit.blTask('restart_process', function () {
    return shipit.remote(pathStr + " && sudo stop portfolio && sudo start portfolio");
  });

  // this task copies the config.json from your local folder to the current folder
  shipit.blTask('install_local_config', function () {
    return shipit.remoteCopy('config.json', currentPath);
  });

  shipit.on('deployed', function () {
    // this series of tasks will result in a good deploy assuming everything is \working
    shipit.start( 'install', 'install_local_config', 'restart_process');
    // if you're having problems with the deploy being successful, but not actually starting the server, try this:
    //shipit.start('kill_screen', 'install', 'install_config', 'start_session');
  });
};
