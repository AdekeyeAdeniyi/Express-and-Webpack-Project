const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios')


console.log(`Your API key is ${process.env.API_KEY}`);
const app = express();

const port = 8080;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})


// app.post('/test', (req, res) => {
//     console.log(req.body.mysite)
//     textapi.sentiment({
//         url: req.body.mysite
//     }, function (error, response) {
//         if (error === null) {
//             console.log(response);
//             res.send(response);
//         }
//     });
// });

app.post('/test', (req, res) => {

    axios.post("https://api.meaningcloud.com/sentiment-2.1", {

    },
        {
            params: {
                key: process.env.API_KEY,
                lang: "en",
                url: req.body.mysite
            }
        }).then(function (data) {
            res.json( 
                 data.score_tag,
                 data.agreement,
                 data.subjectivity,
                 data.confidence,
                 data.irony);
        
        }).catch(function (e) { console.log(e) })

});

