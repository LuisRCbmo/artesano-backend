const app = require('./app');
const dotenv = require('dotenv');

const connectDB = require('./config/database');

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
