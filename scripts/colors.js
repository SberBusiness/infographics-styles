const fs = require('fs');
const path = require('path');
const colors = require('../src/colors');

const distFolderPath = path.resolve(__dirname, '../dist');

const colorsPath = path.resolve(__dirname, '../src/colors.js');

const colorsJsContent = fs.readFileSync(colorsPath, 'utf8');
let colorsLessContent = '';

Object.keys(colors).forEach(colorTitle => {
    colorsLessContent += '@' + colorTitle + ':' + colors[colorTitle] + ';\n';
});

if (!fs.existsSync(distFolderPath)) {
    fs.mkdirSync(distFolderPath);
}

fs.writeFileSync(path.resolve(distFolderPath, 'colors.less'), colorsLessContent, {encoding: 'utf-8'});
fs.writeFileSync(path.resolve(distFolderPath, 'colors.js'), colorsJsContent, {encoding: 'utf-8'});