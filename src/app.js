const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/feria', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB: '));
db.once('open', () => {
  console.log('Conexión a MongoDB exitosa');
});

app.use(bodyParser.json());

const userRoutes = require('./routes/user-routes');

app.use('/api', userRoutes);

app.listen(3001, () => {
  console.log('Servidor en ejecución en el puerto 3001');
});
