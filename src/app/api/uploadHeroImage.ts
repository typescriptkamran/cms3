import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

// Upload handler for Hero Image
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const file = req.body.file; // Assuming the file is sent in 'file' field

      if (!file) {
        return res.status(400).json({ message: 'No file provided' });
      }

      // Define upload path
      const uploadDir = path.resolve('./public/uploads');

      // Ensure directory exists
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      // Save the file
      const filePath = path.join(uploadDir, file.name);
      fs.writeFileSync(filePath, file.data);

      return res.status(200).json({ message: 'File uploaded successfully', filePath });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error, please try again' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
