import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

app.use(express.json());
app.get('/', (req, res) => res.send('API de academia funcionando'));
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
