import express from "express";
import imgs_routes from "./routes/api/image";
import routes from "./routes/routes";

const app = express();
const sharp = require ("sharp")
const port = 3000;

app.use(routes);
app.use('/image',imgs_routes)

app.get('/app',(req  , res) =>{
    res.json({
        message : "hello",
    })
});

app.get('/get' , (req , res)=>{
    res.send('connected....')
});


// sharp(".//assets/garyBarnes.jpg")
//   .resize(200, 240)
//   .toFile(".//assets/output/newgrayBarnes.jpg")




app.listen(port, () =>{
    console.log(`server started at http://localhost:${port}`)
} )


export default app;