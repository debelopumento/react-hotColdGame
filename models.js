const uuid = require('uuid');

function StorageException(message) {
   this.message = message;
   this.name = "StorageException";
}

const HotOrCold = {
  create: function(guessCount) {
    const newRecord = {
      id: 'fewestGuess',
      guessCount: guessCount
    };
    this.records[newRecord.id] = newRecord;
    return newRecord;
  },
  get: function() {
    return Object.keys(this.records).map(key => this.records[key]);
  },
  delete: function(id) {
    delete this.records[id];
  },
  update: function(updatedItem) {
    const {id} = updatedItem;
    this.records[updatedItem.id] = updatedItem;
    return updatedItem;
  }
};

function createRecord() {
  const storage = Object.create(HotOrCold);
  storage.records = {};
  return storage;
}

module.exports = {
  HotOrCold: createRecord()
}
