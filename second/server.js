// import AUTH

const auth = require('./Auth')

// CREATE SERVER
const express = require("express")
const app = express()

app.use(express.json())

const cors = require("cors")
app.use(cors())

const bcrypt = require('bcrypt')


const jwt = require('jsonwebtoken')


// CONNECT TO DB
const mongoose = require("mongoose")
const connected = mongoose.connect("mongodb+srv://ahmedmouatassim:IhsQctXB2xZ0aexR@cluster0.myhqprm.mongodb.net/FirstProject")
connected.then(()=>{
    console.log("connected with db..!")
})

connected.catch((error)=>{
    console.log(error)
})



//IMPORT USER MODEL
const UserModel = require("./moduls/Users")
const { ObjectId } = require('mongodb')


// app.get('/', async (req, res)=>{
//     const users = await UserModel.find();
//     res.json(users)
// })


// CREATE USER
app.post('/users', async (req, res)=>{
    const user = {
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        status:req.body.status
    }
    // req.body
    // const userEmail = user.email 
    // const userPassword = user.password 
    // const userStatus = user.status 
    // const userUserName = user.username 
    console.log(user)
    const newUser = await UserModel.findOne({email : user.email})
    console.log(newUser)

    if(newUser){
        return console.log('exest deja')
    }

    const hashedPassword = bcrypt.hashSync(user.password, 10)
    console.log(hashedPassword)

    const craeteUser = new UserModel({        
        username:user.username,
        email:user.email,
        password:hashedPassword,
        status:user.status
    })
    await craeteUser.save()
    console.log('saved user')
})




// login USER
app.post('/login' ,async (req, res)=>{
    const loginUser = {
        email: req.body.email,
        password: req.body.password
    }

    console.log(loginUser)

    const testLoginEmail = await UserModel.findOne({email: loginUser.email})
    console.log(testLoginEmail)

    if(!testLoginEmail){
        return console.log('dont exest')
    }

        const isPasswordValid = await bcrypt.compare(loginUser.password, testLoginEmail.password)

        if(!isPasswordValid){
            return console.log('email or password dont exest')

        }
        else{
            const token = jwt.sign({id: testLoginEmail._id},"AHMED")
            res.json([{token},{userID:testLoginEmail._id},{message:'exact'}])
            console.log(testLoginEmail._id)
            console.log(token)
            return console.log('exact')

        }
        
    })

    // app.post("/check", auth, async (req, res, next) => {
    //     const users = await UserModel.findOne({})
    //     console.log(users)
    //     res.status(200).json(users)
    // })


    // app.get("/verify", async (req, res) => {
    //     const token = req.headers.authorization.split(' ')[1];
    //     console.log(token)
    //     try{
    //         const verify = jwt.verify(token,"AHMED");
    //         if(verify){

    //             res.send({"message":"valid !"})
    //         }
    //     }
    //     catch(error){
    //         console.error("token verification error", error)
    //         res.send({"message":"notauth"})
    //     }
    // })

app.listen("3001", ()=>{
    console.log('server is working ..!')
})