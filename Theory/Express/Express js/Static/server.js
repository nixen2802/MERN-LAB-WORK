
const express = require('express');
const app = express();

app.use(express.static('images'));
//app.use()
//app.use(express.static('images'));


app.get('/static', (req, res) => {
    res.send('An static files demo');
});


app.listen(3000, () => console.log(' app listening on port 3000!'));