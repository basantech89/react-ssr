import express from 'express';
import React from 'react'
import Home from './client/components/Home';
import { renderToString } from 'react-dom/server'

const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  const html = `
    <html>
      <head>
        <body>
          <div id="root">${content}</div>
          <script src="bundle.js"></script>
        </body>
      </head>
    </html>
  `

  res.send(html)
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})
