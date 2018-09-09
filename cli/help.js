const lib = require('../index');

const padRight = str => {
  return str.length >= 15
    ? `    ${str}\n                   `
    : `    ${str}               `.substr(0, 19);
};

const commandHelp = command => {
  if (!lib[command]) {
    console.error(`  ${command} is not a valid command.`);
    usage();
  } else if (!lib[command].help) {
    console.error(`  No help available for command ${command}.`);
  } else {
    console.log(lib[command].help);
  }
};

const usage = () => {
  const commands = Object.keys(lib)
    .map(command => `${padRight(command)} ${lib[command].description}`)
    .join('\n');

console.log(`
  Usage: bello COMMAND OPTIONS

  Options:
    <none yet>

  Commands:
${commands}

  Run
    bello help COMMAND
  for more information on specific commands.
  Visit https://github.com/andreasmischke/bello to learn more about bello
`);
};

module.exports = async command => command ? commandHelp(command) : usage();
