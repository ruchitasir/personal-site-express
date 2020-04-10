// Grab any node modules we want to use
let express = require('express');

// express layouts
let layouts = require('express-ejs-layouts')

// Declare my app instance
let app = express();

//Tell express which templating language we want to 
app.set('view engine', 'ejs');

// Tell express where the static files(eg css)
app.use(express.static('static'))

// Tell express to use layouts
app.use(layouts)

// Declare routes
app.get('/',(req, res)=>{
    let fruits =['papaya','banana','mango'];
    res.render('home',{name: 'Ruchita', fruits: fruits, page: 'Home'});
})
app.get('/about',(req,res)=>{
    res.render('about',{page: 'About'});
})

app.get('/add/:x/:y',(req,res)=>{
    let result = req.params.x + req.params.y
    res.send(result)
})

// Include routes from controllers
// arg1: relative path
//arg2: require the controller file
app.use('/projects',require('./controllers/projects'))


// Pick a port to listen on
app.listen(3000)