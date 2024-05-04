import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';


export const signup = async (req, res) => {
    //console.log(req.body)
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({ massage: 'All fields are required' })
    }

    const hashedpassword = bcryptjs.hashSync(password,10)

    const newUser = new User({
        username,
        email,
        password: hashedpassword,
    });

   try {
    await newUser.save();
        res.json({ massage: 'signup successful' });
    
   } catch (error) {
    res.status(500).json({massage:error.massage });
   }


    

};