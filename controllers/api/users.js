const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

async function create(req, res) {
    
    try {
        console.log('hit create function with, ' , req.body)
        const user = await User.create(req.body)
        console.log('created ' , user)
        const token = createJWT(user);
        console.log('my token is , ' ,token)
        res.json(token)

    } catch(err) {
        console.log('create - hit error')
        res.status(400).json(err)
    } 
}

function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
        )
}

async function login(req,res){
    try{
        User.findOne({email : req.body.email}).then((user)=>{
            console.log('Found the user for login.' , user)
            console.log('attempting login with ', req.body.password,user.password)

            bcrypt.compare(req.body.password , user.password, async function (err, response){
                if(err){
                    console.log(err)
                    return
                }
                if (!response){
                    new Error('Invalid password.')
                    return
                }else{
                    const token = createJWT(user)
                    console.log('I made a token for login ', token)
                    res.json(token)
                }
            })
        }).catch((err)=>{
            console.log('cant find that user.')
            res.json(err)
        })
    }catch(err) {
        console.log('login - hit error')
        res.status(400).json(err)
    } 
}

function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
  }

module.exports = { create , login , checkToken}


