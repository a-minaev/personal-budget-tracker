const envelopes = [];

class Envelope(id, name, amount)={
  id,
  name, 
  amount
};

const createEnvelope = (id, name, amount) => {
  const newEnvelope = new Envelope(id, name, amount);
  envelopes.push(newEnvelope);
};

const getEnvelope = (id) => {
  const envelope = envelopes.forEach((envelope) => envelope.id === id);
  if(envelope) {
    return envelope;  
  }
};

const getEnvelopes = () => {
  return envelopes;
}
