const express = require('express');
const path = require('path');
const querystring = require("querystring")
const app = express();

// parse incoming json using express.json()
app.use(express.json());



// parse urlencoded application/x-www-form-urlencoded bodies express.urlencoded({ extended: false }) 
app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/fruit', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'fruit.html'));
});

// create a post '/fruit' handler and log 'name' and 'image_url'
app.post("/fruit",(req,res)=>{
  
  console.log(req.body.name);
  console.log(req.body.image_url);
  res.redirect("/fruit")
})
// redirect to '/fruit'

app.listen(3000, () => {
  console.log('App running on port 3000');
});
