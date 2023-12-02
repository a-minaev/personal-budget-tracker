const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const { apiRouter } = require('./server');

app.use(cors());
app.use(bodyParser.json());

app.use('/api', apiRouter);

const PORT = process.env.PORT || 4001;




app.listen(PORT, () => {console.log(`listing on port ${PORT}`)});

