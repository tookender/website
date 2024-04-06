import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  try {
    res.setHeader("Content-Type", "text/html");
    const text = `<!DOCTYPE html>
<html>
  <body>
    <h1>API Routes</h1>
    <ol>
      <li><a href="/api/hello">Hello</a> - gives info about IP and user agent</li>
      <li><a href="/api/doggo">Doggo</a> - random picture of dog</li>
      <li><a href="/api/pro">Windows Pro</a> - tutorial to activate windows pro</li>
    </ol>
    <p>You are free to use this API anywhere you want, but credit would be appreciated.</p>
    <p><i>^^ mainly applies to the doggo endpoint, after all it is my dog lol</i></p>
  </body>
  <style>
    body, html {
      color: white;
      background-color: black;
      font-family: Inter, Consolas, "Comic Sans MS", "Comic Sans", "sans-sherif";
      font-size: 18px;
    }

    a {
      color: #0ea5e9;
    }

    italic {
      font-style: italic;
    }
  </style>
</html>`;
    res.status(200).send(text);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("error");
  }
}
