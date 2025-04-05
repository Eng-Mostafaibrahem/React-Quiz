import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const jsonFilePath = path.resolve('./data/questions.json'); // استخدم resolve لضمان المسار الصحيح

  fs.readFile(jsonFilePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read the file' });
    }
    try {
      const jsonData = JSON.parse(data);
      res.status(200).json(jsonData);
    } catch (err) {
      res.status(500).json({ error: 'Error parsing JSON data' });
    }
  });
}
