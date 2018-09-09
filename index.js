const { readdirSync, statSync } = require('fs');
const { argv } = require('argh');

const helpModule = 'help';

const modules = readdirSync('./modules')
  .filter(file =>
    statSync(`./modules/${file}`).isDirectory()
    || `./modules/${file}`.match(/\.js$/) !== null)
  .map(file => file.replace(/\.js$/, ''));

let submodule;
try {
  submodule = require(`./modules/${argv.argv ? argv.argv.shift() : helpModule}`);
} catch(err) {
  submodule = require(`./modules/${helpModule}`);
}

submodule.run(argv);
