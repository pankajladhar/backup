const fs = require('fs');
const path = require('path');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const writeFile = util.promisify(fs.writeFile);
const _sortBy = require('lodash/sortBy');
// const readFile = util.promisify(fs.readFile);

const ejs = require('ejs');


const srcDir = path.resolve(__dirname, '..', 'node_modules', 'codemirror');
const themeDir = path.resolve(srcDir, 'mode');
const destDir = path.resolve(__dirname, '..', 'src', 'Data');

const modeDir = path.resolve(__dirname, 'templates');
const modeTemplate = path.resolve(modeDir, 'mode.ejs');
const modeFile = path.resolve(destDir, 'mode.js');

readdir(themeDir)
    .then(data => {
        const options = [];
        data.forEach(modeObj => {
            options.push({
                value: modeObj,
                label: modeObj
            })
        });
        return _sortBy(options, "label");
    })
    .then(data => {
        const template = fs.readFileSync(modeTemplate, 'utf-8');
        const generateCode = ejs.render(template, {data: data});
        return generateCode;
    })
    .then(content =>
        fs.writeFileSync(modeFile, content))
    .catch((err) => {
        console.error(err);
    })