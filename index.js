const express = require("express")
const mongoDB = require("./db")
const cors = require('cors');
const app = express()
const port = 5000

mongoDB();

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use((req,res,next) => {
  res.setHeader("Access-control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.use(express.json())
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
