import jsonServer from 'json-server';
import path from 'path';

export default function handler(req, res) {
  try {
    const server = jsonServer.create();
    
    // استخدم المسار الصحيح
    const filePath = path.join(process.cwd(), 'data', 'questions.json');
    console.log("Loading data from:", filePath);

    const router = jsonServer.router(filePath);
    const middlewares = jsonServer.defaults();

    server.use(middlewares);
    server.use(router);

    server.handle(req, res);
  } catch (error) {
    console.error("Error in API handler:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}
