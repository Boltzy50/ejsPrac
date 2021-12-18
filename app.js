const express = require('express');
const app = express();
app.use(express.static('public'))
const port = 4000
const path = require('path');
// Set EJS as templating engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    // The render method takes the name of the HTML
    // page to be rendered as input
    // This page should be in the views folder
    // in the root directory.
   const data = {name:'DevDoctor',
        hobbies:['coding', 'teaching', 'travel']}


res.render('pages/home', {data:data});
    
});

const server = app.listen(port, function(){

    console.log(`listening to port ${port}`)

});