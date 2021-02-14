global.NODE_PORT = process.env.NODE_PORT || 8056;
const express = require('./app/config/express');
const app = express();
const cors = require('cors');

app.use(cors());

app.listen(NODE_PORT, () => console.log('Aplicação rodando na porta: ' + NODE_PORT));
