const express = require('express');
const bodyParser = require('body-parser');
const coditorAPI = require('./API/coditor');
const app = express();
const PORT = process.env.PORT || 5000;

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/v1/coditor', coditorAPI)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})