const express = require('express');
const app = express();

const connection = require('./db/connection');

app.use(express.static('public'));
app.use(express.json());

connection.once('open', ()=>{

    console.log('connected to db');

        const server = app.listen(8080, ()=>{
        console.log('listening on 8080');
    });
});

app.get('/movies', (req, res) => {

    //search all movies
    //when running the app, visualize it on localhost:8080
    //do not work on vsc live server
    connection
    .collection("movies")
    .find({}, {projection: {title:1,genres:1,poster:1,year:1}})
    .limit(30)
    .toArray()
    .then(moviesList => {
        console.log("Os livros voltaram")

        //send result to component
        res.status(200).send(moviesList);

    })
     
});
