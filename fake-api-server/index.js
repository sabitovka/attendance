const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const { compileObjects, generateObjects } = require('./compile.js');

const args = process.argv.slice(2);

if (args.includes('--generate')) {
  const isSkip = args.includes('--skip');
  generateObjects(!isSkip);
}

if (args.includes('--compile')) {
  compileObjects();
}

if (args.includes('--no-start')) {
  return;
}

server.use(middlewares)
server.use(router)
server.listen(3001, () => {
  console.log('Fake API Server is running on port 3001...')
})