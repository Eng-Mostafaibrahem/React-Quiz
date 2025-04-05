// api/questions.js
import jsonServer from 'json-server';
import path from 'path';

export default function handler(req, res) {
  const server = jsonServer.create();
  const router = jsonServer.router(path.join(process.cwd(), 'data/questions.json'));
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);

  try {
    server.handle(req, res);
  } catch (error) {
    console.error("Error while handling request:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
