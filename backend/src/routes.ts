import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

// Rota = conjunto
// Recurso = usuario

// Metodos HTTP = get/post/put/delete
// GET =  buscar informaçao (lista, item)
// POST =  criando informaçao
// PUT = editando informaçao
// DELETE = remover informaçao

// Parametros = parametros
// Query: http://localhost:3333/users/search=bruna
// Route: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users

const routes = Router();
const upload = multer(uploadConfig);

// MVC - Model, Views, Controllers

// Controllers metodos comuns =  index, show, create, update, delete

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;