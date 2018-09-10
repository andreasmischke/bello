const { getCertificateDetails } = require('bello/ssl');

const cli = async argv => {
  if (argv.argv.length < 1) {
    require('../help').cli({ argv: [ 'ssl' ]});
    return;
  }

  const [ domain ] = argv.argv;
  console.log(await getCertificateDetails(domain));
};

const description = () => 'Get details of Servers SSL certificate';
const help = () => '  Help not written yet. :(';

module.exports = {
  cli,
  description,
  help,
};
