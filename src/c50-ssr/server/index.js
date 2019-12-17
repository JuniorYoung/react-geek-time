import express from 'express';
import React from 'react';
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../routes";

const app = express();
app.use(express.static('public'));

app.get('*', (req, resp) => {
    let content = renderToString(
        <StaticRouter location={req.url}>
            <Routes/>
        </StaticRouter>
    );
    resp.send(`
        <html>
            <head>
                <title>ssr</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="/main.js"></script>
            </body>
        </html>
    `);
});

app.listen(9009, () => {
    console.log('启动成功 , port 9009');
});