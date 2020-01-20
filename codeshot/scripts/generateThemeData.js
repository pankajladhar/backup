const fs = require('fs');
const path = require('path');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const writeFile = util.promisify(fs.writeFile);
const _sortBy = require('lodash/sortBy');
// const readFile = util.promisify(fs.readFile);

const ejs = require('ejs');


const srcDir = path.resolve(__dirname, '..', 'node_modules', 'codemirror');
const themeDir = path.resolve(srcDir, 'theme');
const destDir = path.resolve(__dirname, '..', 'src', 'Data');

const templateDir = path.resolve(__dirname, 'templates');
const themeTemplate = path.resolve(templateDir, 'theme.ejs');
const themeFile = path.resolve(destDir, 'theme.js');

readdir(themeDir)
    .then(data => {
        const options = [];
        data.forEach(themeObj => {
            options.push({
                value: themeObj.split('.css')[0],
                label: themeObj.split('.css')[0]
            })
        });
        return _sortBy(options, "label");;
    })
    .then(data => {
        const template = fs.readFileSync(themeTemplate, 'utf-8');
        const generateCode = ejs.render(template, {data: data});
        return generateCode;
    })
    .then(content =>
        fs.writeFileSync(themeFile, content))
    .catch((err) => {
        console.error(err);
    })