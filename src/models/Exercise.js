import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  peso: { type: Number, required: true },
  maquina: { type: String, required: true },
}, { timestamps: true });

const Exercise = mongoose.model('Exercise', exerciseSchema);
export default Exercise;
