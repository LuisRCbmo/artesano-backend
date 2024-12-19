const express = require('express');
const cors = require('cors');

const app = express();

const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes')

// Middlewares
app.use(cors());
app.use(express.json()); // Esto debe venir antes de registrar rutas

// Rutas
app.get('/', (req, res) => {
  res.send('Backend de Artesano Design funcionando');
});

// Rutas de productos (registradas después de los middlewares)
app.use('/api/products', productRoutes);
app.use('/api/categorys', categoryRoutes);

module.exports = app;
