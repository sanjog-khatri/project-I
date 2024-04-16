import { NextFunction, Request, Response } from "express"
import * as RestaurantService from '../services/restaurant.service'
import HttpStatusCodes from "http-status-codes"


export const getAll = async (
  req: Request, 
  res: Response, 
  next: NextFunction) => {
  try {
    // console.log((req as any).user)
        // const userId = (req as any).user.userId;
        const data = await RestaurantService.getAll()
        res.json(data)
    } catch (error) {
        next(error)
    }
}


export const create = async (req: Request, res: Response, next: NextFunction) => {
  try{
    console.log(req.body, ' is request body')
    const restaurant = await RestaurantService.createRestaurant (req.body, (req as any).user.user_id)
  res.status(HttpStatusCodes.CREATED).send(restaurant)
} catch(error){
  next(error)
}
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
  const data: any = req.body
  const id = Number(req.params.id)
  const restaurant = await RestaurantService.update(id, data)
  res.status(HttpStatusCodes.OK).send(restaurant);
  } catch(error) {
    next(error)
  }
}


export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
  // @TODO: Handle errors
  const data = await RestaurantService.remove(Number(id))
  res.status(HttpStatusCodes.NO_CONTENT).send()
}catch(error){
  next(error)
}
}



// // try {
// //   const id = Number(req.params.id)
// // console.log(id, ' request params ko id yo ho hai')
// // const todos = await TodoService.remove(id)
// // res.status(HttpStatusCodes.GONE).send()
// // } catch (error) {
// // next(error)
// // }

export const findOne =async (req: Request, res: Response, next: NextFunction) => {
  try {
      const  id  = Number(req.params.id);
      const data =  await RestaurantService.findOne(id);

      res.status(HttpStatusCodes.ACCEPTED).send(data);
  } catch (error: any) {
    next(error);
  }
  }


  // res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error.message);

  // if (!todo) {
  //   res.status(HttpStatusCodes.NOT_FOUND).send('Todo not found');
  // } else {
  //   res.status(HttpStatusCodes.ACCEPTED).send(todo);
  // }