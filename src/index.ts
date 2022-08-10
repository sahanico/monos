import http from 'http';
import express from 'express';
import routes from './routes';

const hostname = process.env.HOST_ENV || 'localhost';
const port = process.env.HOST_PORT || 3123;
const app = express();
const server = http.createServer(app);
routes(app);

app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Default Api Route',
  })
);

// @ts-ignore
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/api`);
});
