// /pages/api/orders.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma'; // Assuming you're using Prisma

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Fetch all orders from the database
      const orders = await prisma.order.findMany(); 
      res.status(200).json(orders); // Return orders as JSON
    } catch (error) {
      res.status(500).json({ message: 'Error fetching orders' });
    }
  }
}
