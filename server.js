import app from './app';
require('dotenv').config(); 

const port = process.env.PORT || 4000;

app.listen(port, ()=>{
  console.log(`We are listen on port ${port}`)
})