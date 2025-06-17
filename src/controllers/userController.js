import User from '../models/User.js';

// CREATE
export const createUser = async (req, res) => {
  try {
    const { nome, email, telefone } = req.body;
    const newUser = new User({ nome, email, telefone });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ BY ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
export const updateUser = async (req, res) => {
  try {
    const { nome, email, telefone } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { nome, email, telefone },
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json({ message: 'Usuário deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
