import express from "express"
import { randomUUID } from "node:crypto"
const app = express();
const port = 3000;
app.use(express.json());

let carros = [
  {id:"4addf27f-7422-4cf6-9d0d-df6bb165d7a2", nome: "Ferrari F8 Tributo", ano: 2020, marca: "Ferrari", preco: 276000, hp: 720, velocidade_maxima: 340, descricao: "O Ferrari F8 Tributo é um supercarro esportivo de alto desempenho com motor V8 biturbo, design aerodinâmico e tecnologia avançada, oferecendo uma experiência de condução emocionante e luxuosa."},
  {id:"0164656e-19ab-4046-8e31-781a0d7f090b", nome: "Lamborghini Aventador SVJ", ano: 2021, marca: "Lamborghini", preco: 517000, hp: 759, velocidade_maxima: 350, descricao: "O Lamborghini Aventador SVJ é um supercarro italiano de alto desempenho com motor V12, design agressivo e tecnologia de ponta, proporcionando uma experiência de condução extrema e emocionante."},
  {id:"96733f36-4da3-49d0-aaf4-ee46bf825542", nome: "Porsche 911 Turbo S", ano: 2022, marca: "Porsche", preco: 204000, hp: 650,velocidade_maxima: 330, descricao: "O Porsche 911 Turbo S é um carro esportivo de luxo com motor turboalimentado, design elegante e tecnologia de ponta, oferecendo uma experiência de condução excepcional."},
  {id:"d963ab61-a8a4-46fa-850a-495b0f67b5a8", nome: "McLaren 720S", ano: 2021, marca: "McLaren", preco: 299000, hp: 710, velocidade_maxima: 335, descricao: "O McLaren 720S é um supercarro britânico de alto desempenho com motor V8 biturbo, design aerodinâmico e tecnologia avançada, proporcionando uma experiência de condução emocionante e luxuosa."},
  {id:"cb87b718-f155-4ee3-84c6-f4529b7776da", nome: "Bugatti Chiron", ano: 2021, marca: "Bugatti", preco: 3000000, hp: 1500, velocidade_maxima: 444, descricao: "O Bugatti Chiron é um hipercarro francês de alto desempenho com motor W16 quadriturbo, design aerodinâmico e tecnologia de ponta, proporcionando uma experiência de condução extrema e exclusiva."},
  {id:"2e269987-e246-4b5b-a986-18a2b84004d3", nome: "Aston Martin DBS Superleggera", ano: 2020, marca: "Aston Martin", preco: 316000, hp: 715, velocidade_maxima: 335, descricao: "O Aston Martin DBS Superleggera é um carro esportivo de luxo com motor V12 biturbo, design elegante e tecnologia avançada, oferecendo uma experiência de condução emocionante e sofisticada."}
];

app.get('/carros', (req, res) => {
    const nome = req.query.nome;
    const marca = req.query.marca;

    const carro = carros.filter(carro =>
        (!nome || carro.nome.toLowerCase().includes(nome.toLowerCase())) &&
        (!marca || carro.marca.toLowerCase().includes(marca.toLowerCase()))
    );

    res.json(carro);
});


app.get('/carros', (req, res) => {
  res.json(carros);
});

app.get('/carro-favorito', (req, res) => {
  res.json(carros[3]);   
});

app.get('/carro-mais-veloz', (req, res) => {
  res.json(carros[4]);
}); 
app.get('/carro-menos-veloz', (req, res) => {
  const carroMenosVeloz = carros.reduce((menosVeloz, carroAtual) => {
    return carroAtual.velocidade_maxima < menosVeloz.velocidade_maxima ? carroAtual : menosVeloz;
  }, carros[0]);
  res.json(carroMenosVeloz);
});

app.get('/carros/:id', (req, res) => {

     const id = req.params.id;

    const carro = carros.find(carro => carro.id === id);

    if (!carro) {
        return res.status(404).json({
            mensagem: "Carro não encontrado"
        });
    }

    res.json(carro);

})



app.post('/carros', (req, res) => {
  const id = randomUUID()
  const nome = req.body.nome
  const ano = req.body.ano
  const marca = req.body.marca
  const preco = req.body.preco
  const hp = req.body.hp
  const velocidade_maxima = req.body.velocidade_maxima
  const descricao = req.body.descricao

  carros.push({
    id: id,
    nome: nome,
    ano: ano,
    marca: marca,
    preco: preco,
    hp: hp,
    velocidade_maxima: velocidade_maxima,
    descricao: descricao

  })
  
  res.status(201).json({
  mensagem: "Carro cadastrado com sucesso",
  carro: carros[carros.length - 1]
});
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});