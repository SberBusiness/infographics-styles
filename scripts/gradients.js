const fs = require('fs');
const path = require('path');
const gradients = require('../src/gradients');

const distFolderPath = path.resolve(__dirname, '../dist');

const gradientsPath = path.resolve(__dirname, '../src/gradients.js');

const gradientsJsContent = fs.readFileSync(gradientsPath, 'utf8');
let gradientsLessContent = '';

Object.keys(gradients).forEach(gradientTitle => {
    gradientsLessContent += '@' + gradientTitle + ':' + gradients[gradientTitle] + ';\n';
});

if (!fs.existsSync(distFolderPath)) {
    fs.mkdirSync(distFolderPath);
}

fs.writeFileSync(path.resolve(distFolderPath, 'gradients.less'), gradientsLessContent, {encoding: 'utf-8'});
fs.writeFileSync(path.resolve(distFolderPath, 'gradients.js'), gradientsJsContent, {encoding: 'utf-8'});