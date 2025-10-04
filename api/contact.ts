import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ status: "error", message: "Method not allowed" });

  try {
    const url = process.env.GOOGLE_SCRIPT_URL;
    if (!url) throw new Error("Google Script URL not configured");

    // Convert JSON body to form-urlencoded
    const { name, email, message } = req.body as { name: string; email: string; message: string };
    const params = new URLSearchParams({ name, email, message }).toString();

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });

    const text = await response.text();
    res.status(200).json({ status: "success", data: text });
  } catch (err: any) {
    console.error("Serverless function error:", err);
    res.status(500).json({ status: "error", message: err.message });
  }
}
