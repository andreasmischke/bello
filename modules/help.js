const run = async modules => {
  console.log('Wait a moment...');
  await new Promise(resolve => setTimeout(resolve, 1500));
  console.log('Usage');
}

module.exports = {
  run,
};
