const express = require('express');
const app=express();
const PORT=3000;

app.use(express.json());

const authRoutes=require('./routes/route');
app.use('/auth',authRoutes);

app.listen(PORT,()=>{
  console.log(`Server is running on server http://localhost:${PORT}`);
});

