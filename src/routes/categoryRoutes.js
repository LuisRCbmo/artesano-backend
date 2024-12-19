const express = require('express');
const router = express.Router();
const {
  getCategorys,
  createCategorys,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');

router.get('/', getCategorys);

router.post('/', createCategorys);

router.put('/:id', updateCategory);

router.delete('/:id', deleteCategory);

module.exports = router;
