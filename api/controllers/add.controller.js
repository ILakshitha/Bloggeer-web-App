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
    const adds = await Add.find()
    
    .sort({ createdAt: sortDirection })
    .skip(startIndex)

    res.status(200).json({
      adds
    });
    
  } catch (error) {
    next(error);
  }
}