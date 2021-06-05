const { spawn } = require('child_process');
const {app} = require('electron');
const path = require('path');

module.exports.startBackendProcess = function() {
  console.log('Starting backend process');

  let jarPath = 'workspaces.jar';
  let configPath = 'config.yml';

  if (app.isPackaged) {
    jarPath = path.join(process.resourcesPath, jarPath);
    configPath = path.join(process.resourcesPath, configPath);
  }

  const backendProcess = spawn('java', ['-jar', jarPath, 'server', configPath]);

  backendProcess.stdout.on('data', (data) => {
    console.log(`backend: stdout: ${data}`);
  });

  backendProcess.stderr.on('data', (data) => {
    console.error(`backend: stderr: ${data}`);
  });

  backendProcess.on('close', (code) => {
    console.log(`backend process exited with code ${code}`);
  });
}
