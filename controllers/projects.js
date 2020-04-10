// create a router to hold our routes
let router = require('express').Router()

//Define routes
router.get('/',(req,res)=>{
    res.render('projects',{page: 'Projects'});
})

router.get('/1',(req,res)=>{
    res.render('projectDetail',{page: 'Projects',
        num: 'ONE',
    });
})

router.get('/2',(req,res)=>{
    res.render('projectDetail',{page: 'Projects',
        num: 'TWO',
    });
})

//Export the routes so that we can include them in our file
module.exports = router;