const express = require('express');
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


app.listen(process.env.PORT || port, () => console.log(`Application listening on port ${port}!`))
