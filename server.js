const express=require('express');

const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World,,,,My name is Thejaswini,Aspiring software developer');

});

app.get('/products',(req,res)=>{

    console.log(req.query.search);

    const {search}=req.query;

    res.json({message:"This is products  GET route",productName:search});
})
//Products POST route
app.post('/products',(req,res)=>{

    console.log(req.body);

    const{name,price}=req.body;
    res.json({message:"This is products POST route",
        name,
        price,
     });
})

app.put('/products',(req,res)=>{
    res.json({message:"This is products PUT route "});
})

app.patch('/products',(req,res )=>{
    res.json({message:"This is products PATCH route "});
})
app.delete('/products',(req,res)=>{
    res.json({message:"This is products DELETE route "});
})

app.get('/products/:id',(req,res)=>{
    console.log(req.params.id);

    const{id}=req.params


    res.json({message:'This is a single product route',product:id});
})

app.listen(5000,()=>{
    console.log("Server is runnuing");
})