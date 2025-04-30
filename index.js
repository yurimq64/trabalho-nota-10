const express = require("express"); 
const app = express(); 


app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao meu site de carros!</h1>");
})


app.get("/carros", function(req,res){
    res.send("<h1>Lista de carros legais!</h1>");
})


app.get("/consultar/:parametro", function(req,res){

    res.send("retorno da consulta: " + req.params.parametro);
})

app.listen(process.env.PORT ?? 3000,function(erro){
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})