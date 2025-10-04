import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      // If using Google Script, forward the request
      const response = await fetch(process.env.VITE_GOOGLE_SCRIPT_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      res.status(200).json({ status: 'success', data: result });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ status: 'error', message: error.message });
    }
  } else {
    res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }
}
