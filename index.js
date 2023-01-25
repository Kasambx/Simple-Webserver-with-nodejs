const express = require('express'); 

const app = express();  //creates an instance of the express app

const port = 3000;  //our http server will lisen on port 3000

app.get('/', (req, res) => { //creates a handler for the main http route
    res.send("Hello World!");  // handler prints "Hello world" in the web browser 
}) 

app.listen(port, () => {      // initiates the http server
    console.log(`Example app listening
        on port ${port}!`);     //callback prints a message when the server starts
});