const express  = require('express');
const router = express.Router();
const actor = require("./routes/actorroute");



app.get('/actors', actors.getAll);
app.post('/actors', actors.createOne);
app.get('/actors/:id', actors.getOne);
app.put('/actors/:id', actors.updateOne);
app.put('/actors/:id/:movieId', actors.addMovie);
app.delete('/actors/:id', actors.deleteOne);
app.delete('/actors/:actorId/:movieId', actors.removeMovie);

module.exports = router;