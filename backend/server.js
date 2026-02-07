const express = require('express');
const cors = require('cors'); // Importante para o frontend conseguir ler o backend
const app = express();

app.use(cors());
app.use(express.json());

const produtos = [
  { id: 1, nome: "Caneca Cyber Neon", preco: 49.90 },
  { id: 2, nome: "Ecobag Hacker", preco: 39.90 }
];

app.get('/api/produtos', (req, res) => {
  res.json(produtos);
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));