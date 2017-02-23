
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const {HotOrCold} = require('./models');

const jsonParser = bodyParser.json();
const app = express();

app.use(cors());
app.use(morgan('common'));

HotOrCold.create(30);

app.get('/fewestGuess', (req, res) => {
  res.json(HotOrCold.get());
});

app.put('/updateRecord/:newRecord', jsonParser, (req, res) => {
  const updatedRecord = HotOrCold.update({
    id: 'fewestGuess',
    guessCount: req.params.newRecord
  });
  res.status(204).json(updatedRecord);
});


app.listen(process.env.PORT || 6060, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 6060}`);
});
