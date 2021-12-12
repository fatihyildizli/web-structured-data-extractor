const express = require('express')
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')
const helmet = require('helmet')
const cors = require('cors');
const app = express()
const fromUrlRouter = require('./routes/fromUrlRouter')
const fromHtmlRouter = require('./routes/fromHtmlRouter')
var accessLogStream = fs.createWriteStream(
    path.join(__dirname, "server.log"),
    {
        flags: "a"
    }
);
app.use(cors());
app.use(morgan("combined", { stream: accessLogStream }));
app.use(helmet());
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
app.use(express.json({ limit: '100mb' }))

app.use('/url', fromUrlRouter);
app.use('/html', fromHtmlRouter);


module.exports = app