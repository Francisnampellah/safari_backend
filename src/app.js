const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config(); 

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});