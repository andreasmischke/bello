#!/usr/bin/env node
const { argv } = require('argh');
const lib = require('../index');
const help = require('./help');

const cmd = argv.argv && argv.argv.shift();

if (cmd === 'help') {
  help(argv.argv.shift());
} else if (lib[cmd]) {
  lib[cmd].cli(argv);
} else {
  help();
}
