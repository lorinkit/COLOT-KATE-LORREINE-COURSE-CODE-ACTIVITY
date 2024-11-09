import { NextApiRequest, NextApiResponse } from 'next';
import {db} from '@/configs/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { fullName, username, password } = req.body;

    try {
      if (!fullName || !username || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
      }

      const query = `INSERT INTO users (fullname, username, password) VALUES (?, ?, ?)`;
      const values = [fullName, username, password];
      await db.execute(query, values);

      return res.status(201).json({ message: 'User successfully created!' });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error. Please try again later.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
