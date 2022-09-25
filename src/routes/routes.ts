import express from 'express'; 
import imgs_routes from './api/image';

const routes = express.Router();

routes.get('/', (req, res) => { 
    res.send('hello from routes') 

});

routes.use('/image' , imgs_routes)

export default routes;