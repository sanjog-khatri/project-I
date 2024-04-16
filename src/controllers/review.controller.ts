import { NextFunction, Request, Response } from "express"
import * as ReviewService from '../services/review.service'
import HttpStatusCodes from "http-status-codes"

export const createReview = async (
  req: Request, 
  res: Response, 
  next: NextFunction) => {
    try{
      console.log(req.body, ' is request body')
      const restaurant_id = Number(req.params.id)
      const review = await ReviewService.createReview (req.body, (req as any).user.user_id, restaurant_id)
    res.status(HttpStatusCodes.CREATED).send(review)
  } catch(error){
    next(error)
  }
  }
  
  export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
    const data: any = req.body
    
    const id = Number(req.params.id)
    const restaurant = await ReviewService.update(id, data)
    res.status(HttpStatusCodes.OK).send(restaurant);
    } catch(error) {
      next(error)
    }
  }
  
  
  export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
    // @TODO: Handle errors
    const data = await ReviewService.remove(Number(id))
    res.status(HttpStatusCodes.NO_CONTENT).send()
  }catch(error){
    next(error)
  }
  }