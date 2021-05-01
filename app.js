const express = require('express');
const app = express();
const path = require('path');

const connection = require('./db/connection');

app.use(express.static('public'));
app.use(express.json());

connection.once('open', ()=>{

    console.log('connected to db');

        app.listen(process.env.PORT, ()=>{
        console.log(`listening on ${process.env.PORT}`);
    });
});

app.get('/movies', (req, res) => {

    //search all movies
    //when running the app, visualize it on localhost:8080
    //do not work on vsc live server
    connection
    .collection("movies")
    .find({}, {projection: {title:1,genres:1,poster:1,year:1}})
    .limit(50)
    .toArray()
    .then(moviesList => {

        //send result to component
        res.status(200).send(moviesList);

    })
    .catch(error=>console.log(error));
     
});


app.get('/movie/:genres', (req, res) => {

    let genre = req.params.genres

    //search movies with the genres sent by the components
    connection
    .collection("movies")
    .find({'genres': genre }, {projection: {title:1,genres:1,poster:1,year:1}})
    .limit(10)
    .toArray()
    .then(moviesList => {

        //send result to component
        res.status(200).send(moviesList);

    })
    .catch(error=>console.log(error));
    
});

app.get('/genres', (req, res) => {

    //get all genres
    //when running the app, visualize it on localhost:8080
    //do not work on vsc live server    
    connection
    .collection("movies")
    .distinct("genres")
    .then(genresList => {

        //send result to component
        res.status(200).send(genresList);

    })
    .catch(error=>console.log(error));
     
});

//expresse router will interpret all the react router routes (/all and /genre) as routes to the index page
//where the react router will load the page specified in it's path (/all and /genre)
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'), function(err) {
        if (err) { res.status(500).send(err) }
    });
});