export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.TDSCALE_TOKEN;
  if (!token) {
    return res.status(500).json({ error: "Token não configurado" });
  }

  try {
    const upstream = await fetch("https://api.tdscale.com.br/add-lead", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(req.body),
    });

    const text = await upstream.text();
    res.status(upstream.status).send(text);
  } catch (err) {
    res.status(502).json({ error: "Erro ao contatar API" });
  }
}
