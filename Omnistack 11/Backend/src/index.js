const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors);
app.use(express.json());
app.use(routes);

/*
********** Tipos de Parametro **********
- Query Params: Parametros nomiados enviados na rota após "?". 
Ex: https://localhost:3333/users?name=Ruan&filtro=ok
Rota: app.get('/users', funcaoChamada);
Acesso: const params = request.query;

- Route Params: Parametros utilizados para identificar recursos.
Ex: https://localhost:3333/users/1
Rota: app.get('/users/:id', funcaoChamada);
Acesso: const params = request.params;

- Request Body: Corpo da requisição. Utilizado para criar ou alterar recursos.
Exe: Json { "nome" = "Ruan", "cpf" = "123456678" }
Rota: sem exemplo especificado. Compreende o todo (put, post, delete);
Acesso: const params = request.body;
*/

/*
********** Tipos de Acesso ao Banco **********
- Driver: Acesso convencional por Linguagem SQL "SELECT * FROM .. ".
Necessário a instalação do driver específico do banco e, em caso de necessidade de troca de bd, 
terá que ser revisto os SQLs. 

- Query Builder: Padroniza o acesso
Ex: table('users').select('*').where('')
Utilizaremos o Query Builder KNEX.js
*/

app.listen(3333);