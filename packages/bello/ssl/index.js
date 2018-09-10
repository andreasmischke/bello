const sslCertificate = require('get-ssl-certificate');

const parseAltNames = str =>
  str.split(',').map(n => n.trim().replace(/^DNS:/, ''));

const parseDate = str => new Date(Date.parse(str));

const getCertificateDetails = async domain => {
  const {
    subject,
    issuer,
    subjectaltname,
    valid_from,
    valid_to,
  } = await sslCertificate.get(domain);

  return {
    subject,
    issuer,
    altNames: parseAltNames(subjectaltname),
    startDate: parseDate(valid_from),
    endDate: parseDate(valid_to),
  }
};

module.exports = {
  getCertificateDetails,
};
