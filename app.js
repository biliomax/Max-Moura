'ser strict'

const http = require('http');
const debug = require('debug')('nodertr:server');
//const xpto = require('./xpto/tese');
const express = require('express');

const app = express();
const  port = 3000;
app.set('port', port);

const server = http.createServer(app);
const router = express.Route();

const route = router.get('/',(req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});
app.use('/', route);

server.listen(port);
