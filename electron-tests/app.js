import { exec } from 'child_process';
import fs from 'fs';
import os from 'os';

function print(str) {
  document.getElementById('container').innerHTML = str;
}

exec('ls', {
    cwd: os.homedir() + '/dev/'
  }, (err, stdout, stderr) => {
    console.log('executed');
    if (err) {
      print(err);
    } else {
      print(stdout);
    }
  }
);
