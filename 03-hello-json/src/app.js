const express = require('express');

const app = express();

// send send object as json
app.get("/",(req,res)=>{
  res.send({Alaa:true})
})
app.listen(3000, () => {
  console.log('App running on port 3000');
});
