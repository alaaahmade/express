// handle client and server errors
const path = require("path")
const express =require("express")
const router = express.Router()
    router.use((req, res) => {
        res.status(404).sendFile(path.join(__dirname, '..','..', 'public', '404.html'));
      });
      
      router.use((err, req, res, next) => {
        res.status(500).sendFile(path.join(__dirname, '..', '..','public', '500.html'));
      });
      

module.exports =router