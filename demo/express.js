const express = require('express');
const fsp = require('fs').promises;
const app = express();
const port = 3000;
const appDir = `${__dirname}/apps`;

const middleware = require('../middleware');

// Configure babel to handle class properties and JSX
require('@babel/register')({
  plugins: [
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ],
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', { targets: { node: true } }]
  ]
});

// parse body parameters
app.use(express.urlencoded({ extended: true }))

// use the React Hook Middleware
app.use(middleware(appDir));

// provide an index of applications
app.get('/', async (request, response) => {
  list = await fsp.readdir(appDir);
  response.send(`
    <h1>List of React Applications available</h1>
    <ul>
    ${list.map(file => `<li><a href="${file.split('.')[0] }">${file}</a></li>`)}
    </ul>
  `)
});

app.listen(port, () => {
  console.log(`React Hook Middleware Demo app listening at http://localhost:${port}`)
});

// Log unhandled exceptions in promises
process.on('unhandledRejection', (reason, promise) => {
  if (reason.stack) {
    console.log(reason.stack)
  } else {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason)
  }
});
