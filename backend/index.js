const express = require('express');
const cors = require('cors');
const Routes = require('./Routes/routes');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());


app.use('/', Routes);

app.listen(port, () => console.log(`Servidor Online na porta ${port}!`));
