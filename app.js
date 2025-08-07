const express = require('express');
const eventsRouter = require('./index');
const app = express();

app.use('/events', eventsRouter);
app.set('view engine','ejs')

app.get('/', (req, res) => {
  res.render('template')
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
