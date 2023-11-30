const express = require('express');
const apiRouter = express();

const {
    createEnvelope,
    getEnvelope,
    getEnvelopes,
    updateEnvelope,
    transferEnvelope,
    deleteEnvelope
} = require('./db');

apiRouter.param('id', ( req, res, next, id) => {
    req.id = id;
    next();
})

apiRouter.get('/envelopes', (req, res, next) => {
    const envelopes = getEnvelopes();
    if(envelopes){
        res.send(envelopes);
    } else {
        res.status(404).send();
    }
});

apiRouter.get('/envelopes/:id', (req, res, next) => {
    const envelope = getEnvelope(req.id);
    if(envelope){
        res.send(envelope);
    } else {
        res.status(404).send();
    }
});

// Need a parser for this
apiRouter.post('/envelopes', (req, res, next) => {
    const newEnvelope = createEnvelope(req.body);
});

// Need a parser for this
apiRouter.put('/envelopes/:id', (req, res, next) => {
    const updatedEnvelope = updateEnvelope(req.body);
});

apiRouter.delete('/envelopes/:id', (req, res, next) => {
    const envelope = getEnvelope(req.id);
    if(envelope){
        deleteEnvelope(req.id);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});