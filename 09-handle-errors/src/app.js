const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/fruit', (req, res) => {
  // call an undefined function in this handler to cause an error

  res.sendFile(path.join(__dirname, '..', 'public', 'fruit.html'));
});

app.post('/fruit', (req, res) => {
  console.log(req.body.name, req.body.image_url);
  res.redirect('/fruit');
});

// create a 404 middleware sending the '404.html' file
app.use((req,res)=>{
  res.sendFile(path.join(__dirname,"..","public","404.html"))
})
app.use((err,req,res,next)=>{
  res.sendFile(path.join(__dirname,"..","public","500.html"))
})

// create a 500 middleware sending the '500.html' file

app.listen(3000, () => {
  console.log('App running on port 3000');
});
