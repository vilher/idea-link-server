const express = require('express');
require('dotenv').config()

const app = express();

app.get('/remove-char', (req, res) => {
    const { text, char } = req.query

    let regex = new RegExp(char, 'gi')
    let result = text.replace(regex, '')
    res.send(result);
});

app.listen(
    process.env.PORT || process.env.SERVER_PORT,
    () => console.log(`Server is listening on port ${process.env.PORT || process.env.SERVER_PORT}.`)
);