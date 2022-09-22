const User = require('../model/userschema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = 'Dhiraj'

const signup = async(req,res,next) => {
    const {name, email, password} = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({email: email})
    } catch (error) {
        console.log(error)
    }
    if(existingUser) {
        return res.status(400).json({massage:'user allready present'});
    }
    const hashPass = bcrypt.hashSync(password)
    const user = new User({
        name,  // name:name
        email,
        password:hashPass,
    });
    try {
        await user.save();
    }catch(err) {
        console.log(err)
    }
    return res.status(201).json({massage:user});
};

const login = async(req,res,next) => {
    const { email, password} = req.body;
    let existUser;
    try {
        existUser = await User.findOne({email: email})
    } catch (error) {
        console.log(error)
    }
    if(!existUser) {
        return res.status(400).json({massage:'new user is comming goto signup'});
    }
    const checkPass = bcrypt.compareSync(password, existUser.password);
    if(!checkPass){
       return res.status(400).json({massage:'invalid credential'})
    }
    const token = jwt.sign({id: existUser._id},JWT_SECRET_KEY,{expiresIn:"60s"});
    res.cookie(String(existUser._id), token, {
         path:"/",
         expiresIn:new Date(Date.now() + 1000*30), //30sec
         httpOnly:true,
         sameSite: 'lax'
    })
    return res.status(200).json({massage:'login succesfully',user:existUser,token})
}

const getToken = (req,res,next) => {

    const cookies = req.headers.cookie;
    const token = cookies.split('=')[1];
    console.log(token);
    // const headers = req.headers[`authorization`];
    //  console.log(headers)
    // const token = headers.split(" ")[1];
    if(!token){
        res.status(404).json({massage: 'no token found'})
    }
    jwt.verify(String(token),JWT_SECRET_KEY, (err, user)=>{
        if(err) {
           return res.status(400).json({massage: 'invalid token'})
        }
        console.log(user.id);
        req.id = user.id
    })
    next();
}
    const getUser = async(req,res,next) => {
         const userId = req.id;
         let user;
         try {
            user = await User.findById(userId, "-password")
         } catch (error) {
            
         }
         if(!user) {
            res.status(404).json({massage: "user not found"})
         }
         return res.status(200).json({user})
    }
//     const refreshToken = (req, res ,next) =>{
//         const cookies = req.headers.cookie;
//         const prevToken = cookies.split('=')[1];
//         if(!prevToken) {
//           return  res.status(400).json({massage: "token not find"})
//         }
//         jwt.verify(String(token),JWT_SECRET_KEY, (err, user)=>{
//             if(err) {
//                return res.status(403).json({massage: 'authentication failed'})
//             }
//             res.clearCookie(`${user.id}`);
//             req.cookies[`${user.id}`] = "";
//             const token = jwt.sign({id: existUser._id},JWT_SECRET_KEY,{expiresIn:"30s"});

//         res.cookie(String(user.id), token, {
//             path:"/",
//             expiresIn:new Date(Date.now() + 1000*30), //30sec
//             httpOnly:true,
//             sameSite: 'lax'
//        });

//        req.id = user.id;
//        next();
//     })
// }



exports.signup = signup;
exports.login = login;
exports.getToken = getToken;
exports.getUser = getUser;
// exports.refreshToken = refreshToken;