const express = require('express');

const app = express();

// serve Hello New York on the /new-york, /newyork path?
app.get("/new*york",(req,res)=>{
  res.send("New York")
})

app.listen(3000, () => {
  console.log('App running on port 3000');
});
