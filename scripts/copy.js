const fs = require('fs');
const path = require('path');
const distFolderPath = path.resolve(__dirname, '../dist');

fs.copyFileSync(path.resolve(__dirname, '../LICENSE.txt'), path.resolve(distFolderPath, 'LICENSE.txt'));

fs.copyFileSync(path.resolve(__dirname, '../package.json'), path.resolve(distFolderPath, 'package.json'));

fs.copyFileSync(path.resolve(__dirname, '../README.md'), path.resolve(distFolderPath, 'README.md'));
