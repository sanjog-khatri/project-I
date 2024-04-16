import { NextFunction, Request, Response } from "express"
import * as ContactService from '../services/contact.service'
import HttpStatusCodes from "http-status-codes"

export const createContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('request params', req.params)
  try {
    const restaurant_id = Number(req.params.id)
    const data = await ContactService.createContact(req.body, (req as any).user.user_id, restaurant_id)
    res.json(data)
  } catch (err) {
    next(err)
  }
}

  
  export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
    const data: any = req.body
    const id = Number(req.params.id)
    const restaurant = await ContactService.update(id, data)
    res.status(HttpStatusCodes.OK).send(restaurant);
    } catch(error) {
      next(error)
    }
  }
  
  
  export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
    // @TODO: Handle errors
    const data = await ContactService.remove(Number(id))
    res.status(HttpStatusCodes.NO_CONTENT).send()
  }catch(error){
    next(error)
  }
  }