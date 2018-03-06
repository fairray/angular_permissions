const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const {
  permissions
} = require('./permissions.json');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride());
app.get('/api/permissions', (req, res) => {
  return res.json(permissions);
});
app.use(errorHandler);

function errorHandler(req, res, next) {
    res.status(404);
    return res.json({
        message: 'url not found',
        error: true
    })
}
const port = 4002;
app.listen(port, () => {
  console.log(`server was run on port ${port}`);
})
