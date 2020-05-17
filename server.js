const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

let cacher = {
    "frames": [
        {
            "text": "Länggasse45: 212 founds",
            "icon": "i37601"
        }
    ]
};

app.get('/geocaching', (req, res) => {
    res.send(cacher);
});

app.get('/privacy.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/privacy.html'));
});


app.listen(process.env.PORT || port, () => console.log(`Application listening on port ${port}!`))
