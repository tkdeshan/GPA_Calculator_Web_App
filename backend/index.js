const express = require('express');
const subjectRoutes = require('./routes/subjectRoutes');

const app = express();

const PORT = 5000;

app.use('/api', subjectRoutes);

app.listen(PORT, () => {
  console.log(`The server is running http://localhost:${PORT}`);
});
