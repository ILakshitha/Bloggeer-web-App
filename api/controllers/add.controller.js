import Add from '../models/add.model.js';
import { errorHandler } from '../utils/error.js';



export const create = async (req, res, next)=>{

    if (!req.user.isAdmin) {
        return next(errorHandler(403, 'You are not allowed to create a post'));
      }
    
      if (!req.body.title) {
        return next(errorHandler(400, 'Please provide all required fields'));
      }  

      const newAdd = new Add({
        ...req.body,
        
        userId: req.user.id,
      });

    try {
       
          await newAdd.save();

          res.status(200).json(newAdd);
    } catch (error) {
        next(error);
        
    }
};

export const getadds = async(req,res,next)=>{
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to see all users'));
  }
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;
    const adds = await Add.find({
      ...(req.query.addId && { _id: req.query.addId }),
    })
     
    .sort({ createdAt: sortDirection })
    .skip(startIndex)

    res.status(200).json({
      adds
    });
    
  } catch (error) {
    next(error);
  }
};

export const deleteadd = async (req,res,next)=>{
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to delete this post'));
  }
  try {
    await Add.findByIdAndDelete(req.params.addId);
    res.status(200).json('The Add has been deleted');
  } catch (error) {
    next(error);
  }
};

export const updateadd = async(req,res,next) =>{
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to update this post'));
  }

  try {

    const updatedAdd = await Add.findByIdAndUpdate(
      req.params.addId,
      {
        $set: {
          title: req.body.title,
          image: req.body.image,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedAdd);
    
  } catch (error) {
    next(error);
  }
}