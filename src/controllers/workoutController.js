import Workout from '../models/Workout.js';
import Exercise from '../models/Exercise.js';

// CREATE
export const createWorkout = async (req, res) => {
  try {
    const { nome, exercicios } = req.body;
    const newWorkout = new Workout({ nome, exercicios });
    const saved = await newWorkout.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ
export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().populate('exercicios');
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ BY ID
export const getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id).populate('exercicios');
    if (!workout) return res.status(404).json({ error: 'Treino não encontrado' });
    res.json(workout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
export const updateWorkout = async (req, res) => {
  try {
    const { nome, exercicios } = req.body;
    const updated = await Workout.findByIdAndUpdate(
      req.params.id,
      { nome, exercicios },
      { new: true }
    ).populate('exercicios');
    if (!updated) return res.status(404).json({ error: 'Treino não encontrado' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
export const deleteWorkout = async (req, res) => {
  try {
    const deleted = await Workout.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Treino não encontrado' });
    res.json({ message: 'Treino deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
