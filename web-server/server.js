const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('combined'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/search', (req, res) => {
  const currentDate = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Calcutta'
  });
  const q = req.query.q || '';
  res.json({ ok: true, server_time: currentDate, message: 'Echo', query: q });
});

app.listen(3000, () => console.log('Demo app listening on :3000'));
