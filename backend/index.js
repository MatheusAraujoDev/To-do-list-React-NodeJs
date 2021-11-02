const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Routes = require('./Routes/routes');

app.use('/', Routes);

app.listen(port, () => console.log(`Servidor Online na porta ${port}!`));