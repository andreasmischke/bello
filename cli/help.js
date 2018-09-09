const lib = require('../index');

const padRight = str => {
  return str.length >= 15
    ? `    ${str}\n                   `
    : `    ${str}               `.substr(0, 19);
};


module.exports = async () => {

  const commandHelp = Object.keys(lib)
    .map(command => `${padRight(command)} ${lib[command].description}`)
    .join('\n');

console.log(`
  Usage: bello COMMAND OPTIONS

  Options:
    <none yet>

  Commands:
${commandHelp}

  Run
    bello help COMMAND
  for more information on specific commands.
  Visit https://github.com/andreasmischke/bello to learn more about bello
`);
};
