const envelopes = [];

class Envelope{
  constructor(id, name, amount){
  id,
  name, 
  amount
  }
};

const isValidEnvelope = (id) => {
  const envelope = envelopes.forEach((envelope) => envelope.id === id);
  return envelope;
}
const createEnvelope = (object) => {
  
  try{
    const newEnvelope = new Envelope(object.id, object.name, object.amount);
    envelopes.push(newEnvelope);
    return (newEnvelope);
  } catch (error) {
    console.log('Looks like you have an error');
    return undefined;
  }
};

const getEnvelope = (id) => {
  const envelope = isValidEnvelope(id);
  if(envelope) {
    return envelope;  
  }
};

const getEnvelopes = () => {
  return envelopes;
}

const updateEnvelope = (object) => {
  const envelope = isValidEnvelope(object.id);
  if(envelope){
    envelope.amount += object.amount;
    return envelope;
  }
}

const transferEnvelope = (id1, id2, amount) => {
  const envelope1 = isValidEnvelope(id1);
  const envelope2 = isValidEnvelope(id2);

  if(envelope1 && envelope2){
    if(checkBalance(envelope2, amount)){
      envelope1.amount +=amount;
      envelope2.amount -=amount;
    }
  }
}

const checkBalance = (envelope, amount) => {
  if (envelope.balance < amount){
    console.log('Sorry, insufficient funds for desired operation');
    return False;
  }
  return True;
}

const deleteEnvelope = (id) => {
  const envelope = isValidEnvelope(id);
  if(envelope){
    const envelopeIndex = envelopes.indexOf(envelope);
    envelopes.splice(envelopeIndex, 1);
  }
}

module.exports = {
  createEnvelope,
  getEnvelope,
  getEnvelopes,
  updateEnvelope,
  transferEnvelope,
  deleteEnvelope
};