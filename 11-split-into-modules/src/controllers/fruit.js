// handle '/fruit' get and post requests
const path = require("path")

const express =require("express")
const router = express.Router()

    router.get('/fruit', (req, res,next) => {
        res.sendFile(path.join(__dirname, '..', '..','public', 'fruit.html'));
        
      });
      
      router.post('/fruit', (req, res) => {
        console.log(req.body.name, req.body.image_url);
        res.redirect('/fruit');
      });


module.exports  = router