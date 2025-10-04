// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { Form } from "react-router-dom";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(FormData),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json({ status: "error", message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
