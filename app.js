const express = require('express');
const eventsRouter = require('./index');
const app = express();

app.use('/events', eventsRouter);

app.get('/', (req, res) => {
  res.send('🎉 Historical Events API is running! Use /api/events or /api/events/:year');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
