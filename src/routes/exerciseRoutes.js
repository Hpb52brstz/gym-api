import express from 'express';
import {
  createExercise,
  getExercises,
  getExerciseById,
  updateExercise,
  deleteExercise
} from '../controllers/exerciseController.js';

const router = express.Router();

router.post('/', createExercise);
router.get('/', getExercises);
router.get('/:id', getExerciseById);
router.put('/:id', updateExercise);
router.delete('/:id', deleteExercise);

export default router;
