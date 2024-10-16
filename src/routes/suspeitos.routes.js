import { Router } from "express";

const suspeitosRoutes = Router()

let suspeitos = [
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Justin Bieber",
        idade: 30,
        descricao: ["Branco", "Loiro", "Tatuagens", 1.75],
        envolvimento: "não"
    },
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "P Diddy",
        idade: 54,
        descricao: ["Negro", "Cabelo Curto", "Tatuagens", 1.78],
        envolvimento: "sim"
    },
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "50 Cent",
        idade: 49,
        descricao: ["Negro", "Cabelo Curto", "Tatuagens", 1.83],
        envolvimento: "não"
    },
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Eminem",
        idade: 51,
        descricao: ["Branco", "Loiro", "Tatuagens", 1.73],
        envolvimento: "não"
    },
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Jay-Z",
        idade: 54,
        descricao: ["Negro", "Usa Dreads", "Tatuagens", 1.88],
        envolvimento: "sim"
    },
];