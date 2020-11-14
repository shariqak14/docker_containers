const express = require('express');
var cors = require('cors');
const apiRouter = require('./routes');

const app = express();
// Then pass them to cors:
app.use(cors());
app.use(express.json());
app.use('/', apiRouter);

const PORT = 3010;
const HOST = '0.0.0.0';
app.listen(PORT, HOST, function() {
  console.log("... port %d in %s mode", PORT, app.settings.env);
});
