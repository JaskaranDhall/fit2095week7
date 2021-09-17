const express  = require('express');
const router = express.Router();
const movie = require("./routes/movieroute");



app.get('/movies', movies.getAll);
app.post('/movies', movies.createOne);
app.get('/movies/:id', movies.getOne);
app.put('/movies/:id', movies.updateOne);
app.delete('/movies/:id', movies.deleteOne);
app.delete('/movies/:movieId/:actorId', movies.removeActor);
app.put('/movies/:movieId/:actorId', movies.addActor);
app.get('/movies/:year1/:year2', movies.getAllYear);

module.exports = router;