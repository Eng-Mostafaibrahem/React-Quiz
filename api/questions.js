// api/questions.js
import jsonServer from 'json-server';
import path from 'path';

export default function handler(req, res) {
  const server = jsonServer.create();
  const filePath = path.join(__dirname, '../../data/questions.json');
  
  const router = jsonServer.router(filePath);
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use((req, res, next) => {
    res.on('finish', () => {
      console.log('Response status:', res.statusCode);
      console.log('Response body:', res.body);
    });
    next();
  });
  
  server.handle(req, res);
}
