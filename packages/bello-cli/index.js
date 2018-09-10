#!/usr/bin/env node
const { argv } = require('argh');

const cmd = argv.argv ? argv.argv.shift() : 'help';

try {
  require(`./${cmd}`).cli(argv);
} catch(err) {
  require('./help').cli(argv);
}
