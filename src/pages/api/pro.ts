import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  res.setHeader("Content-Type", "text/html");
  const text = `<!DOCTYPE html>
<html>
  <body>
    <h1>Windows Pro For Free</h1>
    <ol>
        <li>open powershell your ur pc</li>
        <li>type <code>irm https://massgrave.dev/get | iex</code> and press enter</li>
        <li>disable your connection to the internet</li>
        <li>press <code>7</code> to go to the extras menu</li>
        <li>press <code>1</code> to go to the windows edition menu</li>
        <li>choose "professional edition", it should be highlighted in purple</li>
        <li>choose the first method</li>
        <li>wait a few minutes until your pc restarts</li>
        <li>connect to the internet</li>
        <li>open up powershell again</li>
        <li>run the script again, <code>irm https://massgrave.dev/get | iex</code> and press enter</li>
        <li>press <code>1</code> to activate your windows pro with HWID</li>
        <i><li>you might need to restart your pc again to fully activate it</li></i>
    </ol>
    <p>you're welcome, use this for anything like RDP</p>
  </body>
  <style>
    body, html {
      color: white;
      background-color: black;
      font-family: Inter, Consolas, "Comic Sans MS", "Comic Sans", "sans-sherif";
      font-size: 18px;
    }

    code {
        background-color: #1f1f1f;
        padding: 0px 4px;
    }
  </style>
</html>`;

  res.status(200).send(text);
}
