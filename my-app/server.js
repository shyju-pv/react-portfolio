const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

const prefix = "/react-portfolio";
// serve static assets normally
app.use(express.static(__dirname + '/static'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, prefix + '/static/index.html')/*, function(err) {
        if (err) {
            res.status(500).send(err)
        }
    }*/)
});
//response.sendFile(path.resolve(__dirname, prefix + '/static', 'index.html'))
app.listen(port);