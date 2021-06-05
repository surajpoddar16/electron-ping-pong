const { spawn } = require('child_process');

module.exports.startBackendProcess = function() {
  console.log('Starting backend process');

  const backendProcess = spawn('java', ['-jar', 'workspaces.jar', 'server', 'config.yml']);

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
