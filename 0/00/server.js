const express = require('express');
const app = express();

app.use(express.static('public'));

const port_num = 2222;
app.listen(port_num, () => console.log('http://localhost:2222'));