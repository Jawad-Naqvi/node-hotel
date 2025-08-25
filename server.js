const express = require('express');
const app = express();
const db = require('./db');


const bodyParser = require('body-parser');
app.use(bodyParser.json());

// const Person = require('./models/person');
//  const MenuItem = require('./models/menuItem');

app.get('/', function (req, res){
    res.send('welcome to my home... How i can help you?, we have list of menus')
})


//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
//use the router
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes)


app.listen(3000, ()=> {
    console.log('listening on port 3000');    
})