import { Router } from 'express'; 
import { store as storeClients } from '../controllers/clientsController.js';
import { store as storeAgency } from '../controllers/agenciasController.js';
import { store as storeBancos } from '../controllers/bancosController.js';

const routes = Router();

routes.get('/', (req, res) => res.json({server: true}));
routes.get('/insertclients', storeClients);
routes.get('/insertAgency', storeAgency);
routes.get('/insertBancos', storeBancos);

export { routes };
