const commands = {
  ssl: require('./ssl'),
};

const padRight = str => {
  return str.length >= 15
    ? `    ${str}\n                   `
    : `    ${str}               `.substr(0, 19);
};

const commandHelp = command => {
  if (!commands[command]) {
    console.error(`  ${command} is not a valid command.`);
    usage();
  } else if (!commands[command].help) {
    console.error(`  No help available for command ${command}.`);
  } else {
    console.log(commands[command].help());
  }
};

const usage = () => {
  const commandList = Object.keys(commands)
    .map(command => `${padRight(command)} ${commands[command].description()}`)
    .join('\n');

console.log(`
  Usage: bello COMMAND OPTIONS

  Options:
    <none yet>

  Commands:
${commandList}

  Run
    bello help COMMAND
  for more information on specific commands.
  Visit https://github.com/andreasmischke/bello to learn more about bello
`);
};

const cli = async argv => {
  if(argv.argv && argv.argv.length > 0) {
    commandHelp(argv.argv.shift());
  } else {
    usage();
  }
}

module.exports = {
  cli,
}
