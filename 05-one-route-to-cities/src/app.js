const express = require('express');

const app = express();

// create 1 handler for 3 paths
app.get("/:city",(req,res)=>{
  let city = req.params.city
  res.send(`Hello :${city}`)
})

app.listen(3000, () => {
  console.log('App running on port 3000');
});
