const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataPath = path.join(__dirname, './data.json');

router.get('/', (req, res) => {
  const events = JSON.parse(fs.readFileSync(dataPath));
  res.json(events);
});

router.get('/:year', (req, res) => {
  const year = parseInt(req.params.year);
  const events = JSON.parse(fs.readFileSync(dataPath));
  const filtered = events.filter(event => event.year === year);
  if (filtered.length === 0) {
    return res.status(404).send('No events logged for this year. Check between 1939-2024');
  }
  res.json(filtered);
});

module.exports = router;
