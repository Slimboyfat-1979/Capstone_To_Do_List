import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () =>{
    console.log("Listening on port 3000");
})

const items = [];

app.get("/", (req, res) => {
   res.render("index.ejs");
  
})

app.post("/", (req, res) => {
    items.push(req.body.item);
    res.render("index.ejs", {
        itemList: items
    })
})