import express from 'express'

import * as ReviewController from '../controllers/review.controller'
import { createReviewDto, removeReviewDto, updateReviewDto } from '../validators/create-review-validator'
import { validate } from '../utils/validate'
import { authenticateToken } from '../middlewares/authentication.middleware'


const route = express.Router({mergeParams: true})


// route.get('/', UserController.getAll)
// route.get('/:id', UserController.findOne)

route.post('/',  validate(createReviewDto),authenticateToken, ReviewController.createReview)

route.delete('/', validate(removeReviewDto),authenticateToken, ReviewController.remove)

route.patch('/', validate(updateReviewDto),authenticateToken, ReviewController.update)

export default route;
