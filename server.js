const express = require('express');
const apiRouter = express();

apiRouter.get('/envelopes');

apiRouter.get('/envelopes/:id');

apiRouter.post('/envelopes');

apiRouter.put('/envelopes/:id');

apiRouter.delete('/envelopes/:id');