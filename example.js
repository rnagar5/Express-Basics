const express=require('express');
const app=express();
const port=5000;

app.get('/posts/:id',(req,res)=>{
    const postId=req.params.id;
    res.send(`The post ID is ${postId}`);
});
app.get('/find', (req, res) => {
    const { qu} = req.query;
    if (!qu) return res.status(400).send("no queryyyy ");
    res.send(`query is ${qu}`);
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("ERRRRORRRRR");
});


app.listen(port, () => {
    console.log(`Server running on ${port}`);
});