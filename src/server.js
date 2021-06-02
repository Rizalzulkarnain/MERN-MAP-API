const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require('dotenv').config();

const PinRoutes = require('../routes/PinRoutes');
const UserRoutes = require('../routes/UserRoutes');

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Database Connected');
  })
  .catch((err) => {
    console.log(`Database not connected ${err}`);
  });

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/', PinRoutes);
app.use('/api/', UserRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
