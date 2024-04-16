/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from 'express'
// import { getAll } from '../controllers/todo.controller'
import * as RestaurantController from '../controllers/restaurant.controller'
import { validate } from '../utils/validate'

import contactRouter from '../routes/contact.route'
import reviewRouter from '../routes/review.route'

import { authenticateToken, is_admin } from '../middlewares/authentication.middleware'
import { createRestaurantDto, updateRestaurantDto } from '../validators/create-restaurant.validator'
// import { createUserDto, updateTodoDto } from '../validators/create-todo.validator'
const route = express.Router()

route.use('/:id/contacts', contactRouter)

route.use('/:id/reviews', reviewRouter)

route.get('/', RestaurantController.getAll)

route.get('/:id', RestaurantController.findOne)

route.post('/', validate(createRestaurantDto), authenticateToken, is_admin, RestaurantController.create)

route.delete('/:id', authenticateToken, is_admin, RestaurantController.remove)

route.patch('/:id',validate(updateRestaurantDto), authenticateToken, is_admin, RestaurantController.update)


export default route;