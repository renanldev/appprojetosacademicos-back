const Pet = require('../models/Pet');

// LISTAR
exports.listPets = async (req, res) => {
  const entries = await DiaryEntry.find().populate('petId');
  res.json(pets);
};

// BUSCAR POR ID
exports.getPetById = async (req, res) => {
  const pet = await Pet.findById(req.params.id);
  if (!pet) return res.status(404).json({ message: 'Pet não encontrado' });
  res.json(pet);
};

// CRIAR
exports.createPet = async (req, res) => {
  try {
    const pet = await Pet.create(req.body);
    res.status(201).json(pet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ATUALIZAR
exports.updatePet = async (req, res) => {
  const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!pet) return res.status(404).json({ message: 'Pet não encontrado' });
  res.json(pet);
};

// DELETAR
exports.deletePet = async (req, res) => {
  const pet = await Pet.findByIdAndDelete(req.params.id);
  if (!pet) return res.status(404).json({ message: 'Pet não encontrado' });
  res.json({ message: 'Pet removido' });
};
