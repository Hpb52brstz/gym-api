import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  exercicios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],
}, { timestamps: true });

const Workout = mongoose.model('Workout', workoutSchema);
export default Workout;
