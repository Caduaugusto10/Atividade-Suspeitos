import { Router } from "express";

const suspeitosRoutes = Router();

let suspeitos = [
{
    id: Math.floor(Math.random() * 1000000),
    nome: "Justin Bieber",
    idade: 30,
    descricao: ["Branco", "Loiro", "Tatuagens", 1.75],
    envolvimento: "não",
},
{
    id: Math.floor(Math.random() * 1000000),
    nome: "P Diddy",
    idade: 54,
    descricao: ["Negro", "Cabelo Curto", "Tatuagens", 1.78],
    envolvimento: "sim",
},
{
    id: Math.floor(Math.random() * 1000000),
    nome: "50 Cent",
    idade: 49,
    descricao: ["Negro", "Cabelo Curto", "Tatuagens", 1.83],
    envolvimento: "não",
},
{
    id: Math.floor(Math.random() * 1000000),
    nome: "Eminem",
    idade: 51,
    descricao: ["Branco", "Loiro", "Tatuagens", 1.73],
    envolvimento: "não",
},
{
    id: Math.floor(Math.random() * 1000000),
    nome: "Jay-Z",
    idade: 54,
    descricao: ["Negro", "Usa Dreads", "Tatuagens", 1.88],
    envolvimento: "sim",
},
];

// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
return res.status(200).json(suspeitos);
});

// Rota para cadastrar um novo suspeito
suspeitosRoutes.post("/", (req, res) => {
const { nome, idade, descricao, envolvimento } = req.body;

// Validação dos campos obrigatórios
if (!nome || !idade || !envolvimento) {
    return res.status(400).json({
    message: "Os campos nome, idade e envolvimento são obrigatórios!",
    });
}

// Validação de existência de Envolvimento
if (envolvimento != "sim" && envolvimento != "não") {
    return res.status(400).send({
    message: "Digite 'sim' ou 'não'!",
    });
}
if ((Number.isInteger(idade)) == false  ) {
    return res.status(400).send({
    message: "Digite um numero inteiro para idade!!",
    })
}

  // Criação de um novo suspeito
const novoSuspeito = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    idade,
    descricao,
    envolvimento,
};

  // Adiciona o novo suspeito ao array de Suspeitos
suspeitos.push(novoSuspeito);

return res.status(201).json({
    message: "suspeito cadastrado com sucesso!",
    novoSuspeito,
});
});
export default suspeitosRoutes;
