const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('An static files demo');
});

app.listen(3000, () => console.log(' app listening on port 3000!'));