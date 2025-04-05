import jsonServer from 'json-server';
import path from 'path';

export default function handler(req, res) {
  const server = jsonServer.create();
  const router = jsonServer.router(path.join(process.cwd(), 'data/questions.json'));
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);

  server.handle(req, res); // استماع للطلبات بشكل صحيح
}
