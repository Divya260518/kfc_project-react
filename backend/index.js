const express=require('express')
const app=express()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const port=process.env.PORT||3030
const cors=require('cors')
const bodyParser = require('body-parser')



app.use(cors());
app.use(express.json());
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("hello world")
})
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = "mongodb+srv://dineshdivi2605:diyadivi@cluster0.e4b4kuj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const foodcollections=client.db("demo").collection("ship");

    // const users=[];
    // const secretkey='your-secret-key';
    // app.post('/signin',async(req,res)=>{
    //     const{username,password}=req.body;
    //     const hashedpassword=await bcrypt.hash(password,10);
    //     users.push({username,password:hashedpassword})
    //     console.log('signin',username)
    //     res.sendStatus(201)
    // })

    // app.post('/login',async(req,res)=>{
    //     const{username,password}=req.body;
    //     const user=users.find(u=>u.username===username);
    //     if(user)
    //     {
    //         const isPasswordValid=await bcrypt.compare(password,user.password)
    //         if(isPasswordValid)
    //         {
    //             const token=jwt.sign({username},secretkey,{expiresIn:"1h"})
    //             res.json({token})
    //         }
    //         else
    //         {
    //             console.log("login valid:",username)
    //             res.status(201).json({message:"invalid"})
    //         }

    //     }
    //     else{
    //         console.log("login",username)
    //         res.status(201).json({message:"invalid"})
    //     }
    // })

    app.post("/upload",async(req,res)=>{
        const data=req.body;
        const result=await foodcollections.insertOne(data);
        res.send(result);
    })
    app.get("/foods",async(req,res)=>{
        const foods=foodcollections.find();
        const result=await foods.toArray();
        res.send(result);
    })
    app.get("/fooding/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await foodcollections.findOne(filter);
      res.send(result);
    })
    app.patch("/allproducts/:id",async(req,res)=>{
      
        const id=req.params.id;
        const updateFooddata=req.body;
        const filter={_id:new ObjectId(id)};

        const updateDoc={
            $set:{
                ...updateFooddata
            },
        }
        const options ={upsert:true};
        const result=await foodcollections.updateOne(filter,updateDoc,options);
        res.send(result);
    })

    app.delete('/food/:id',async(req,res)=>{
        const id=req.params.id;
        const filter={_id:new ObjectId(id)};
        const result=await foodcollections.deleteOne(filter);
        res.status(200).json({success:true , message:"data deleted successfully", result});
    })
      
          // peri peri chicken
    const periperi=client.db("demo").collection("perichicken");

    app.post("/uploadperi",async(req,res)=>{
        const data=req.body;
        const result=await periperi.insertOne(data);
        res.send(result);
    })
    app.get("/foodsperi",async(req,res)=>{
        const foods=periperi.find();
        const result=await foods.toArray();
        res.send(result);
    })
    app.get("/foodingperi/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await periperi.findOne(filter);
      res.send(result);
    })
    app.patch("/allproductsperi/:id",async(req,res)=>{
      
        const id=req.params.id;
        const updateFooddata=req.body;
        const filter={_id:new ObjectId(id)};

        const updateDoc={
            $set:{
                ...updateFooddata
            },
        }
        const options ={upsert:true};
        const result=await periperi.updateOne(filter,updateDoc,options);
        res.send(result);
    })

    app.delete('/foodperi/:id',async(req,res)=>{
        const id=req.params.id;
        const filter={_id:new ObjectId(id)};
        const result=await periperi.deleteOne(filter);
        res.status(200).json({success:true , message:"data deleted successfully", result});
    })


                // value snackers
    const valuesnackers=client.db("demo").collection("snackers");

    app.post("/uploadvalue",async(req,res)=>{
        const data=req.body;
        const result=await valuesnackers.insertOne(data);
        res.send(result);
    })
    app.get("/foodsvalue",async(req,res)=>{
        const foods=valuesnackers.find();
        const result=await foods.toArray();
        res.send(result);
    })
    app.get("/foodingvalue/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await valuesnackers.findOne(filter);
      res.send(result);
    })
    app.patch("/allproductsvalue/:id",async(req,res)=>{
      
        const id=req.params.id;
        const updateFooddata=req.body;
        const filter={_id:new ObjectId(id)};

        const updateDoc={
            $set:{
                ...updateFooddata
            },
        }
        const options ={upsert:true};
        const result=await valuesnackers.updateOne(filter,updateDoc,options);
        res.send(result);
    })

    app.delete('/foodvalue/:id',async(req,res)=>{
        const id=req.params.id;
        const filter={_id:new ObjectId(id)};
        const result=await valuesnackers.deleteOne(filter);
        res.status(200).json({success:true , message:"data deleted successfully", result});
    })

              //  chickenrolls
    const chickenrolls=client.db("demo").collection("rolls");

    app.post("/uploadrolls",async(req,res)=>{
        const data=req.body;
        const result=await chickenrolls.insertOne(data);
        res.send(result);
    })
    app.get("/foodsrolls",async(req,res)=>{
        const foods=chickenrolls.find();
        const result=await foods.toArray();
        res.send(result);
    })
    app.get("/foodingrolls/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await chickenrolls.findOne(filter);
      res.send(result);
    })
    app.patch("/allproductsrolls/:id",async(req,res)=>{
      
        const id=req.params.id;
        const updateFooddata=req.body;
        const filter={_id:new ObjectId(id)};

        const updateDoc={
            $set:{
                ...updateFooddata
            },
        }
        const options ={upsert:true};
        const result=await chickenrolls.updateOne(filter,updateDoc,options);
        res.send(result);
    })

    app.delete('/foodrolls/:id',async(req,res)=>{
        const id=req.params.id;
        const filter={_id:new ObjectId(id)};
        const result=await chickenrolls.deleteOne(filter);
        res.status(200).json({success:true , message:"data deleted successfully", result});
    })
     
              //  chickenbuckets
    const chickenbuckets=client.db("demo").collection("buckets");

    app.post("/uploadbuckets",async(req,res)=>{
        const data=req.body;
        const result=await chickenbuckets.insertOne(data);
        res.send(result);
    })
    app.get("/foodsbuckets",async(req,res)=>{
        const foods=chickenbuckets.find();
        const result=await foods.toArray();
        res.send(result);
    })
    app.get("/foodingbuckets/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await chickenbuckets.findOne(filter);
      res.send(result);
    })
    app.patch("/allproductsbuckets/:id",async(req,res)=>{
      
        const id=req.params.id;
        const updateFooddata=req.body;
        const filter={_id:new ObjectId(id)};

        const updateDoc={
            $set:{
                  ...updateFooddata
            },
        }
        const options ={upsert:true};
        const result=await chickenbuckets.updateOne(filter,updateDoc,options);
        res.send(result);
    })

    app.delete('/foodbuckets/:id',async(req,res)=>{
        const id=req.params.id;
        const filter={_id:new ObjectId(id)};
        const result=await chickenbuckets.deleteOne(filter);
        res.status(200).json({success:true , message:"data deleted successfully", result});
    })

              // biryanibuckets
    const biryanibuckets=client.db("demo").collection("biryani");

    app.post("/uploadbiryani",async(req,res)=>{
        const data=req.body;
        const result=await biryanibuckets.insertOne(data);
        res.send(result);
    })
    app.get("/foodsbiryani",async(req,res)=>{
        const foods=biryanibuckets.find();
        const result=await foods.toArray();
        res.send(result);
    })
    app.get("/foodingbiryani/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await biryanibuckets.findOne(filter);
      res.send(result);
    })
    app.patch("/allproductsbiryani/:id",async(req,res)=>{
      
        const id=req.params.id;
        const updateFooddata=req.body;
        const filter={_id:new ObjectId(id)};

        const updateDoc={
            $set:{
                ...updateFooddata
            },
        }
        const options ={upsert:true};
        const result=await biryanibuckets.updateOne(filter,updateDoc,options);
        res.send(result);
    })

    app.delete('/foodbiryani/:id',async(req,res)=>{
        const id=req.params.id;
        const filter={_id:new ObjectId(id)};
        const result=await biryanibuckets.deleteOne(filter);
        res.status(200).json({success:true , message:"data deleted successfully", result});
    })
        // boxmeals
    const boxmeals=client.db("demo").collection("meals");

    app.post("/uploadmeals",async(req,res)=>{
        const data=req.body;
        const result=await boxmeals.insertOne(data);
        res.send(result);
    })
    app.get("/foodsmeals",async(req,res)=>{
        const foods=boxmeals.find();
        const result=await foods.toArray();
        res.send(result);
    })
    app.get("/foodingmeals/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await boxmeals.findOne(filter);
      res.send(result);
    })
    app.patch("/allproductsmeals/:id",async(req,res)=>{
      
        const id=req.params.id;
        const updateFooddata=req.body;
        const filter={_id:new ObjectId(id)};

        const updateDoc={
            $set:{
                ...updateFooddata
            },
        }
        const options ={upsert:true};
        const result=await boxmeals.updateOne(filter,updateDoc,options);
        res.send(result);
    })

    app.delete('/foodmeals/:id',async(req,res)=>{
        const id=req.params.id;
        const filter={_id:new ObjectId(id)};
        const result=await boxmeals.deleteOne(filter);
        res.status(200).json({success:true , message:"data deleted successfully", result});
    })

              //  burgers
    const burgers=client.db("demo").collection("burgers");

    app.post("/uploadburgers",async(req,res)=>{
        const data=req.body;
        const result=await burgers.insertOne(data);
        res.send(result);
    })
    app.get("/foodsburgers",async(req,res)=>{
        const foods=burgers.find();
        const result=await foods.toArray();
        res.send(result);
    })
    app.get("/foodingburgers/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await burgers.findOne(filter);
      res.send(result);
    })
    app.patch("/allproductsburgers/:id",async(req,res)=>{
      
        const id=req.params.id;
        const updateFooddata=req.body;
        const filter={_id:new ObjectId(id)};

        const updateDoc={
            $set:{
                ...updateFooddata
            },
        }
        const options ={upsert:true};
        const result=await burgers.updateOne(filter,updateDoc,options);
        res.send(result);
    })

    app.delete('/foodburgers/:id',async(req,res)=>{
        const id=req.params.id;
        const filter={_id:new ObjectId(id)};
        const result=await burgers.deleteOne(filter);
        res.status(200).json({success:true , message:"data deleted successfully", result});
    })

                //  snacks
    const snacks=client.db("demo").collection("snackes");

    app.post("/uploadsnacks",async(req,res)=>{
        const data=req.body;
        const result=await snacks.insertOne(data);
        res.send(result);
    })
    app.get("/foodssnacks",async(req,res)=>{
        const foods=snacks.find();
        const result=await foods.toArray();
        res.send(result);
    })
    app.get("/foodingsnacks/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await snacks.findOne(filter);
      res.send(result);
    })
    app.patch("/allproductssnacks/:id",async(req,res)=>{
      
        const id=req.params.id;
        const updateFooddata=req.body;
        const filter={_id:new ObjectId(id)};

        const updateDoc={
            $set:{
                ...updateFooddata
            },
        }
        const options ={upsert:true};
        const result=await snacks.updateOne(filter,updateDoc,options);
        res.send(result);
    })

    app.delete('/foodsnacks/:id',async(req,res)=>{
        const id=req.params.id;
        const filter={_id:new ObjectId(id)};
        const result=await snacks.deleteOne(filter);
        res.status(200).json({success:true , message:"data deleted successfully", result});
    })

            // beverages
    const beverages=client.db("demo").collection("ages");

    app.post("/uploadbeverages",async(req,res)=>{
        const data=req.body;
        const result=await beverages.insertOne(data);
        res.send(result);
    })
    app.get("/foodsbeverages",async(req,res)=>{
        const foods=beverages.find();
        const result=await foods.toArray();
        res.send(result);
    })
    app.get("/foodingbeverages/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await beverages.findOne(filter);
      res.send(result);
    })
    app.patch("/allproductsbeverages/:id",async(req,res)=>{
      
        const id=req.params.id;
        const updateFooddata=req.body;
        const filter={_id:new ObjectId(id)};

        const updateDoc={
            $set:{
                ...updateFooddata
            },
        }
        const options ={upsert:true};
        const result=await beverages.updateOne(filter,updateDoc,options);
        res.send(result);
    })

    app.delete('/foodbeverages/:id',async(req,res)=>{
        const id=req.params.id;
        const filter={_id:new ObjectId(id)};
        const result=await beverages.deleteOne(filter);
        res.status(200).json({success:true , message:"data deleted successfully", result});
    })

                // chickenwings
    const chickenwings=client.db("demo").collection("wings");

    app.post("/uploadwings",async(req,res)=>{
        const data=req.body;
        const result=await chickenwings.insertOne(data);
        res.send(result);
    })
    app.get("/foodswings",async(req,res)=>{
        const foods=chickenwings.find();
        const result=await foods.toArray();
        res.send(result);
    })
    app.get("/foodingwings/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await chickenwings.findOne(filter);
      res.send(result);
    })
    app.patch("/allproductswings/:id",async(req,res)=>{
      
        const id=req.params.id;
        const updateFooddata=req.body;
        const filter={_id:new ObjectId(id)};

        const updateDoc={
            $set:{
                ...updateFooddata
            },
        }
        const options ={upsert:true};
        const result=await chickenwings.updateOne(filter,updateDoc,options);
        res.send(result);
    })

    app.delete('/foodwings/:id',async(req,res)=>{
        const id=req.params.id;
        const filter={_id:new ObjectId(id)};
        const result=await chickenwings.deleteOne(filter);
        res.status(200).json({success:true , message:"data deleted successfully", result});
    })
     
  
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
app.listen(port,()=>{
    console.log(`connected to ${port}`)
})
