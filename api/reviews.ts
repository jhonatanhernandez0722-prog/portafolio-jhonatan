import { neon } from "@neondatabase/serverless";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  const sql = neon(process.env.DATABASE_URL!);

  if (req.method === "GET") {
    const rows = await sql`SELECT * FROM reviews ORDER BY created_at DESC`;
    return res.json(rows);
  }

  if (req.method === "POST") {
    const { name, message } = req.body ?? {};
    if (!name?.trim() || !message?.trim()) {
      return res.status(400).json({ error: "name and message are required" });
    }
    const rows = await sql`
      INSERT INTO reviews (name, message)
      VALUES (${name.trim()}, ${message.trim()})
      RETURNING *
    `;
    return res.status(201).json(rows[0]);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
