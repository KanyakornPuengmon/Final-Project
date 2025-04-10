const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));