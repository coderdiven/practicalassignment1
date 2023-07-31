const { json } = require('body-parser');
const express = require('express')
const app = express();
const PORT = 8000;
app.use(express.static('public'))

let scores = [
    { 'score': "124/1 (19.4 overs)" },
    { 'score': "138/2 (21.3 overs)" },
    { 'score': "169/2 (25.1 overs)" },
    { 'score': "178/3 (28.0 overs)" },
    { 'score': "190/5 (32.1 overs)" },
    { 'score': "280/6 (42.5 overs)" },
    { 'score': "299/8 (46.3 overs)" },
    { 'score': "311/9 (48.4 overs)" },
    { 'score': "328/10 (50.0 overs)" }
]

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT} http://localhost:${PORT}`)
})
app.get("/getscore", (req, res) => {
    let resScore =
        (scores[randomIntFromInterval(1, scores.length - 1)])
    res.send(resScore)
})