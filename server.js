const express=require('express');
const app=express();
const userRoute = require('./routes/userRoutes');
const port=3000;


app.use(express.json());
app.get('/',(req,res)=>{
res.send("GET REQUEST");
});
app.post('/',(req,res)=>{
    res.send("POST REQUEST");
});
app.put('/user',(req,res)=>{
    res.send("PUT REQUEST");
});
app.delete('/user',(req,res)=>{
    res.send("DELETE REQUEST");
});

// app.get('/user/:userId',(req,res)=>{
//     const {userId}=req.params;
//     res.send(`The user ID is ${userId}`);
// });
app.use('/users',userRoute);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});