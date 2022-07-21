const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const { compileObjects, generateObjects } = require('./compile.js');

const args = process.argv.slice(2);

if (args.includes('--generate')) {
  generateObjects();
}

if (args.includes('--compile')) {
  compileObjects();
}

server.use(middlewares)
server.use(router)
server.listen(3001, () => {
  console.log('Fake API Server is running on port 3001...')
})