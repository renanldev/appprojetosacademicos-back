const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/', (req, res) => {
  res.json({ message: 'API de Projetos Acadêmicos funcionando.' });
});

app.use('/api/projects', require('./routes/projectRoutes'));

mongoose
  .connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/project_showcase')
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log('Servidor rodando');
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar no MongoDB:', error);
  });