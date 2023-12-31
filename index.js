import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () =>{
    console.log("Listening on port 3000");
})

app.get("/", (req, res) => {
   res.render("index.ejs")
})
