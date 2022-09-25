// import { it } from "node:test";
import supertest from "supertest";

import app from "../index";
import imgs_routes from "../routes/api/image";


const req = supertest(app);
const req2 = supertest(imgs_routes)

describe('test basic endpoint server', () =>{
    it('get the /endpoint', async () =>{
        const res = await req.get('/app');
        expect(res.status).toBe(200);
        
    })

})



