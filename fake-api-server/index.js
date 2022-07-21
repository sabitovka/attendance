const { compileObjects, generateObjects } = require('./compile.js');

const args = process.argv.slice(2);

if (args.includes('--generate')) {
  generateObjects();
}
if (args.includes('--compile')) {
  compileObjects();
}