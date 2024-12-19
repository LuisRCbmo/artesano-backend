const Category = require('../models/Category');

const getCategorys = async (req, res) => {
  try {
    const categorys = await Category.find();
    res.status(200).json(categorys);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener categorias' });
  }
};

const createCategorys = async (req, res) => {
  try {
    const newCategorys = new Category(req.body);
    await newCategorys.save();
    res.status(201).json(newCategorys);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear categoria', error: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar categoria', error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Categoria eliminado con éxito' });
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar categoria', error: error.message });
  }
};


module.exports = { getCategorys, createCategorys, updateCategory, deleteCategory};
