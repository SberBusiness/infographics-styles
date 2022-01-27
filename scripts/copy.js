const copy = require('copy');
const path = require('path');
const distFolderPath = path.resolve(__dirname, '../dist');

const copyCallback = (message) => (err) => {
    if (err) {
        throw new Error(err);
    }
    console.log(message);
};

copy(path.resolve(__dirname, '../LICENSE.txt'), distFolderPath, {}, copyCallback('Успешно скопирован файл лицензии'));

copy(path.resolve(__dirname, '../package.json'), distFolderPath, { flatten: true }, copyCallback('Успешно скопирован package.json'));

copy(path.resolve(__dirname, '../README.md'), distFolderPath, {}, copyCallback('Успешно скопирован файл README'));
