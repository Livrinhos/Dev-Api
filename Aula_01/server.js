const express = require('express');
const app = express();
const port = 3000;

let jogos = [
  {nome: "Rocket League", data_lancamento: "7 de julho de 2015",genero: "Futecarro", classificacao: "Livre", plataforma: "PC, Consoles, Mobile", preco: 0, criador: "Psyonix", descricao: "Rocket League é um jogo de futebol com carros, onde os jogadores controlam veículos para chutar uma bola gigante em direção ao gol adversário."},
  {nome: "Minecraft", data_lancamento: "18 de novembro de 2011", genero: "Sandbox", classificacao: "Livre", plataforma: "PC, Consoles, Mobile", preco: 26.95, criador: "Mojang Studios", descricao: "Minecraft é um jogo de construção e sobrevivência em um mundo aberto, onde os jogadores podem explorar, minerar recursos, construir estruturas e enfrentar criaturas em um ambiente gerado proceduralmente."},
  {nome: "Among Us", data_lancamento: "15 de junho de 2018", genero: "Party Game", classificacao: "10+", plataforma: "PC, Mobile, Consoles", preco: 4.99, criador: "InnerSloth", descricao: "Among Us é um jogo multiplayer online em que os jogadores trabalham juntos para completar tarefas em uma nave espacial, enquanto tentam descobrir quem entre eles é o impostor sabotando a equipe."},
  {nome: "Fortnite", data_lancamento: "25 de julho de 2017", genero: "Battle Royale", classificacao: "Livre", plataforma: "PC, Consoles, Mobile", preco: 0, criador: "Epic Games", descricao: "Fortnite é um jogo de batalha real em que os jogadores competem para ser o último sobrevivente em um mapa cheio de armas, construções e desafios, com atualizações constantes e eventos especiais."},
  {nome: "Roblox", data_lancamento: "1 de setembro de 2006", genero: "MMORPG", classificacao: "Livre", plataforma: "PC, Consoles, Mobile", preco: 0, criador: "Roblox Corporation", descricao: "Roblox é uma plataforma de jogos online que permite aos usuários criar e jogar uma variedade de jogos gerados pelos próprios jogadores, oferecendo uma experiência social e criativa em um ambiente virtual."},
  {nome: "Ark Survival Ascended", data_lancamento: "25 de outubro de 2023", genero: "Survival", classificacao: "16+", plataforma: "PC, Consoles", preco: 49.99, criador: "Studio Wildcard", descricao: "Ark Survival Ascended é um jogo de sobrevivência em mundo aberto onde os jogadores devem explorar um ambiente hostil habitado por dinossauros e outras criaturas pré-históricas, coletar recursos, construir abrigos e sobreviver aos desafios do ambiente."}
]

app.get('/jogos', (req, res) => {
  res.json(jogos);
});

app.get('/nome', (req, res) => {
  res.send(`Olá Henrique!`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});