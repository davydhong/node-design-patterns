// ! Provide a surrogate or placeholder for another object (much more bigger/expensive object) to control access to it.
// ? Useful for (1) managing expensive objects, (2) managing a remote resource, (3) provide data validation of input, (4) provide security, (5) cache data, (6) even log actions. Just like the adapter pattern, a proxy must provide the same interface as the subject.

// ! goal: restrict reading of a file

// let fs = require('fs');

const path = require('path');
const FS_Proxy = require('./FS_Proxy');
const fs = new FS_Proxy(require('fs'));

// const txtFile = path.join(__dirname, 'Readme.txt');
const mdFile = path.join(__dirname, 'Readme.md');

const result = (error, contents) => {
  if (error) {
    console.log('\x07');
    console.error(error);
    process.exit(0);
  }

  console.log('reading file...');
  console.log(contents);
};

// fs.readFile(txtFile, 'UTF-8', result);
fs.readFile(mdFile, 'UTF-8', result);
