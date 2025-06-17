import Exercise from '../models/Exercise.js';

// CREATE
export const createExercise = async (req, res) => {
  try {
    const { nome, peso, maquina } = req.body;
    const newExercise = new Exercise({ nome, peso, maquina });
    const saved = await newExercise.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ
export const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// READ BY ID
export const getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) return res.status(404).json({ error: 'Exercício não encontrado' });
    res.json(exercise);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
export const updateExercise = async (req, res) => {
  try {
    const { nome, peso, maquina } = req.body;
    const updated = await Exercise.findByIdAndUpdate(
      req.params.id,
      { nome, peso, maquina },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Exercício não encontrado' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
export const deleteExercise = async (req, res) => {
  try {
    const deleted = await Exercise.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Exercício não encontrado' });
    res.json({ message: 'Exercício deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
