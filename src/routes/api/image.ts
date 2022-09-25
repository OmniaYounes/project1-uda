import express  from "express";
import  { Router } from "express";
import path from "path";

const fs = require ('fs')
const sharp = require ("sharp")


const imgs_routes = Router();
imgs_routes.use(express.json())

imgs_routes.get('/:name/:width/:height' , (req , res) => {
   console.log("hello");
   
    
    const name = req.params.name;
    console.log(name);

    
    const width = (req.params.width as unknown) as Number;
    console.log(width);

    const height = (req.params.height as unknown) as Number ;
    console.log(height);
    console.log(typeof(height));
    

    const imgLocation = path.resolve('./') + `/assets/${name}.jpg`;

    sharp(imgLocation)
  .resize( `${width}`, `${height}`)
  .toFile(".//assets/output/newmarc.jpg")

    if (name === undefined) {
      return res
        .status(400)
        .send('undefind imgg');
    }
   
     console.log(imgLocation);
    

     res.sendFile(imgLocation);
})







export default imgs_routes;