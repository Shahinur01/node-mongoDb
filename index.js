const express = require('express')
const app = express();

// app.get('/', function (req, res) {
//     res.send('hello world')
//   })
  
//   app.listen(3000);
app.get('/',function(req,res){
    res.send('hello world');
})
app.listen(3000,() => console.log("listen to your mouth"));