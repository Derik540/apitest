  
  const { json } = require('body-parser')
  const express = require('express') 
  const res = require('express/lib/response')
  const server  = express()


// o usuário armazena o que deseja uma uma variavel
 server.post('/materiasprimas',( req,res ) => {
    console.log(req.query)
    var produtos =(req.query.produtos)
    var quantidade=(req.query.quantidade)  
})

 // usuario deseja consultar a quatidade de materias  
server.get('/materiasprimas',(req,res) => {
     return res.json(produtos,quantidade)
    
})

// usuario deseja retirar algum item 
server.get('/materiasprimas?farinha')
     return res.json(produtos)

// para atualizar o banco de dados
server.update('/materiasprimas') 

// O gerente deseja ver o total e itens
server.get('/materiasprimas')
      return res.json(produtos.quantidade)
      
      

server.listen(3000,()=> {
  console.log('servidor está funcionando....');
})



















