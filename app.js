const express = require('express');
const eventsRouter = require('./index');
const app = express();

app.use('/api/events', eventsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
