"use strict";
// // import { Router, Request, Response } from 'express';
// // import path from 'path';
// // import leads from '../../Utils/_DATA';
// // import { existsSync } from "fs"
// const leads_routes = Router();
// leads_routes.get('/', (req: Request, res: Response) => {
//   const name = req.query.name as string;
//   const imgLocation = path.resolve('./') + `/assets/${name}.jpg`;
//   const lead = leads.includes(name);
//   // If the name query wasn't provided return and end function
//   /*if (name === undefined) {
//     return res
//       .status(400)
//       .send('Bad request, query parameter (name) is required.');
//   }*/ 
//   // If the name doesn't exist in the array return and end function
//   /*if (lead === false) {
//     return res
//       .status(404)
//       .send('Resource not found, this session lead does not exist!');
//   }*/
//   // If the name exists in the array but the photo doesn't exist return and end function
//   /*if(existsSync(imgLocation) === false){
//     return res
//     .status(404)
//     .send('Resource not found, this session lead does not have a photo!');
//   }*/
//   // Otherwise return the lead's avatar
//   res.sendFile(imgLocation);
// });
// export default leads_routes;
