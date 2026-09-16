import express from "express"
import { randomUUID } from "node:crypto"
const app = express();
const port = 3000;
app.use(express.json());
import {PrismaClient} from "./generated/prisma/client.js"
import{PrismaMariaDb} from "@prisma/adapter-mariadb"

const mysqlAdapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "01072008",
  database: "api_carros"
});

const prisma = new PrismaClient({ adapter: mysqlAdapter });



app.get('/carros', async (req, res) => {
  const carros = await prisma.carro.findMany();

  if(carros.length < 1) {
    return res.status(404).json({
        mensagem: "Nenhum Carro encontrado"
    })
    
  }
    res.json(carros);
});


app.get('/carros/:id', async (req, res) => {

     const id = req.params.id;

    const carro = await prisma.carro.findUnique({
    where: {
        id: id
    }
})

    if (!carro) {
        return res.status(404).json({
            mensagem: "Carro não encontrado"
        });
    }

    res.json(carro);

})





app.post('/carros', async (req, res) => {
  try {
    const carro = await prisma.carro.create({
      data: {
        nome: req.body.nome,
        ano: req.body.ano,
        marca: req.body.marca,
        preco: req.body.preco,
        hp: req.body.hp,
        velocidade_maxima: req.body.velocidade_maxima,
        descricao: req.body.descricao
      }
    });

    res.status(201).json(carro);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      erro: "Erro ao cadastrar carro"
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});