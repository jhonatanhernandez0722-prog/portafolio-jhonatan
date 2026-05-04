import { neon } from "@neondatabase/serverless";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { id } = req.body ?? {};
  if (!id) return res.status(400).json({ error: "id required" });

  const sql = neon(process.env.DATABASE_URL!);
  const rows = await sql`
    UPDATE reviews SET likes = likes + 1 WHERE id = ${id} RETURNING likes
  `;
  return res.json({ likes: (rows[0] as { likes: number })?.likes ?? 0 });
}
