const express  = require('express');
const router = express.Router();
const student = require("./routes/studentroute");



app.get('/list',student.getAll);
app.get('/list/:id',student.getOneById);
app.post('/add',student.addOne);

module.exports = router;