import jsonServer from 'json-server';
import path from 'path';

const server = jsonServer.create();
const router = jsonServer.router(path.join(process.cwd(), 'data/questions.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// تعيين البورت إلى 9000 بشكل صريح
server.listen(9000, () => {
  console.log('JSON Server is running on port 9000');
});