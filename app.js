const express = require('express');
const eventsRouter = require('./index');
const app = express();

app.use('/events', eventsRouter);

app.get('/', (req, res) => {
  res.send('API is up and running! Use /events or /events/year');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
