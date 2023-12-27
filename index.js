import express from "express";
import bodyParser from "body-parser";
const app= express();
const port= 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
 res.render("index.ejs");
});

app.get("/home", (req, res)=>{
    res.render("index.ejs");
});

app.get("/Recipes/Sandwiches", (req, res)=>{
    res.render("partials/Recipes/Sandwiches.ejs");
});

app.get("/Recipes/Pasta", (req, res)=>{
    res.render("partials/Recipes/Pasta.ejs");
});

app.get("/Recipes/Pizza", (req, res)=>{
    res.render("partials/Recipes/Pizza.ejs");
});

app.get("/Recipes/Salad", (req, res)=>{
    res.render("partials/Recipes/Salad.ejs");
});

app.get("/Recipes/Seafood", (req, res)=>{
    res.render("partials/Recipes/Seafood.ejs");
});

app.post("/submit", (req, res)=>{
res.render("partials/main.ejs")
});







app.listen(port, ()=>{
console.log(`server running on port ${port}`)
});