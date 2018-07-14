module.exports = function (shipit) {
  // Require shipit.
  require('shipit-deploy')(shipit);

  // Constants.
  const config = require('./config/config.json');
  const pathStr = "PATH='$PATH:/usr/local/bin'";
  const currentPath = config.deploy.path + "/current/config/";

  // Configuration for deployment.
  shipit.initConfig({
    default: {
      workspace: 'tmp',
      deployTo: config.deploy.path,
      repositoryUrl: 'https://github.com/JoshSpears3/joshspears.io',
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

  // This task starts the server in a screen with a name set in the config.
  shipit.blTask('restart_process', function () {
    return shipit.remote(pathStr + ' && sudo stop portfolio && sudo start portfolio');
  });

  // This task copies the config.json from your local folder to the current folder.
  shipit.blTask('install_local_config', function () {
    return shipit.remoteCopy('./config/config.json', currentPath);
  });

  shipit.on('deployed', function () {
    // This series of tasks will result in a good deploy assuming everything is \working
    shipit.start('install_local_config', 'restart_process');
    // If you're having problems with the deploy being successful, but not actually starting the server, try this:
    // shipit.start('kill_screen', 'install', 'install_config', 'start_session');
  });
};
