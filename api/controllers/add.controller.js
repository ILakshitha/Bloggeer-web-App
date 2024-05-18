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