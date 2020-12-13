const port = 3000;

const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.json({title : "Hello World, API Stub!"})
});
app.post('/', (req, res) => {
    res.json({title : "Hello World, API Stub!"})
});

app.get('/:file', (req, res) => {
    let output = {}
    try {
        output = require("./output/" + req.params["file"] + ".json")
    } catch (error) {
        res.status(404)
        res.send("not found response file")
        return    
    }

    res.json(output)
});
app.post('/:file', (req, res) => {
    let output = {}
    try {
        output = require("./output/" + req.params["file"] + ".json")
    } catch (error) {
        res.status(404)
        res.send("not found response file")
        return    
    }

    res.json(output)
});


app.listen(port, () => {
    console.log('Server running on port:' + port);
})