import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import addRoutes from './routes/add.route.js';
import cookieParser from 'cookie-parser';
import path from'path';


dotenv.config();

mongoose
.connect(process.env.MONGO).then(()=>{
    console.log('Mongodb is connected');
}).catch((err)=>{
    console.log(err);
})

const _dirname =path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());


app.listen(3000, ()=>{
    console.log('Server is running on port 3000!!!');

});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment',commentRoutes);
app.use('/api/add',addRoutes);


console.log(_dirname);
app.use(express.static(path.join(_dirname, '/client/dist')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(_dirname,'client', 'dist', 'index.html'))
});

app.use((err,req,res,next)=>{
    const statuscode = err.statuscode||500;
    const message =err.message ||"internal Server Error";
    res.status(statuscode).json({
        success: false,
        statuscode,
        message
    })
});

