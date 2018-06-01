const express = require('express')
const bodyParser = require("body-parser");
const app = express()


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/insertReading', (req, res) => {
    let id = req.body.id
    let reading = req.body.reading
    res.send('Hello '+id+" Your reading is : "+reading)
}
)

app.listen(3000, () => console.log('Example app listening on port 3000!'))