import { NextApiRequest, NextApiResponse } from 'next';
import { getUsers } from '@/services/user.service';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const users = await getUsers();
            res.status(200).json(users);
        } else {
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to load users' });
    }
};

export default handler;
