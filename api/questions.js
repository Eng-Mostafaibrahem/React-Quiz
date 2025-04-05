// api/questions.js
import jsonServer from 'json-server';
import path from 'path';

const server = jsonServer.create();
const router = jsonServer.router(path.join(process.cwd(), 'data/questions.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(5050, () => {
  console.log('JSON Server is running on port 9000');
});
