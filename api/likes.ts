import { neon } from "@neondatabase/serverless";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  const sql = neon(process.env.DATABASE_URL!);

  if (req.method === "GET") {
    const rows = await sql`SELECT total FROM portfolio_likes WHERE id = 1`;
    return res.json({ total: (rows[0] as { total: number })?.total ?? 0 });
  }

  if (req.method === "POST") {
    const rows = await sql`
      UPDATE portfolio_likes SET total = total + 1 WHERE id = 1 RETURNING total
    `;
    return res.json({ total: (rows[0] as { total: number })?.total ?? 0 });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
