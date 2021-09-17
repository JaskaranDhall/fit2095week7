const express = require('express');
//const teacher = require('./routes/teacherroute');
//const student = require('./routes/studentroute');
const actor = require('./routes/actorroute');
const movie = require('./routes/movieroute');


const mongoose = require('mongoose');
//const expressteacherRouter = require('./routes/expressteacher')
//const expressstudentRouter = require('./routes/expressstudent')
const expressActorRoute = require('./routes/expressactor')
const expressMovieRoute = require('./routes/expressmovie')


const app = express();
app.set('PORT',8080);


const URL = "mongodb://localhost:27017/fit2095w7app";
mongoose.connect(URL,function(err){
    if(err){
        console.error(err);
        return;
    }
    console.log('connection established');
})

app.use(express.json());
app.use('/teacher',expressActorRoute);
app.use('/student',expressMovieRoute);



app.listen(app.get('PORT'),()=>{
    console.log(`listening on port ${app.get('PORT')}`);
}) 