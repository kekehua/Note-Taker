const express = require('express');
const notes = require("./db/db.json");
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res)=>
    res.sendFile(path.join(__dirname,'\public/index.html')));
    
app.get("/notes", (req, res)=>
    res.sendFile(path.join(__dirname,'\public/notes.html')));

app.get("/api/notes", (req, res)=>{
    res.json(notes);
});
app.post("/api/notes", (req,res)=>{
    const note = {
        title:req.body.title,
        text: req.body.text
    }
    notes.push(note);
    res.json(notes);
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);