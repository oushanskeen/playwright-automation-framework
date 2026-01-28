import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.use(express.raw({ type: '*/*' }));

app.post('/otel/v1/traces', async (req, res) => {
  try {
    const response = await fetch('http://localhost:4318/v1/traces', {
      method: 'POST',
      headers: {
        'Content-Type': req.headers['content-type'] || 'application/json',
      },
      body: req.body,
    });
    console.error('OTEL proxy OK');
    res.status(response.status).send(await response.text());
  } catch (err) {
    console.error('OTEL proxy error', err);
    res.sendStatus(502);
  }
});

app.listen(3001, () => {
  console.log('OTEL proxy running on :3001');
});
