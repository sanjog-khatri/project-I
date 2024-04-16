import { PrismaClient } from "@prisma/client"
import  Boom from "@hapi/boom"
import { 
 z } from "zod"
import { createReviewDtoBody } from "../validators/create-review-validator"

const prisma = new PrismaClient()


export const createReview = async (body: z.infer<typeof createReviewDtoBody>, loggedInUser_id: number, restaurant_id: number) => {
  const { comment, rating } = body


  let createdRestro: any;
  // ts-ignore
  await prisma.$transaction(async (tx) => {
    createdRestro = await tx.review.create({
      data: {
        comment,
        date: new Date(),
        restaurant_id,
        user_id: loggedInUser_id,
        rating: rating
      },
    })
  })
  return createdRestro;
}

    // API design pattern issues
    // await Promise.all(contactNumbers.map(contact => {
    //   return tx.contact.create({
    //     data: {
    //       restaurantId: createdRestro.id,
    //       number: contact
    //     }
    //   })
    // }))

 

  // export const create = async (body: any) => {
  //   // const { title } = body
  //   try {
  //     return await prisma.review.create({

  //     data: {

  //       rating : body.rating,
  //       comment : body.comment,  
  //       date: body.date,
        
  //     }

      
//     })
//     // return 'create garne api'
//   } catch( error: any) {
//     console.log(error);

//     if ( error.code === 'P2003') {
//       throw Boom.notFound('cannot be posted')
//     } else {
//       throw(error)
//     }
//   }
// }
   

export const update = async (id: number, body: any) => {
  try {
    const rating: string = body.rating;
   return await prisma.review.update({
     data:{
       
        comment: body.comment,
        date: new Date(),
        rating: body.rating

     },
     where: {

         id: id
     }
   })
   
}catch(error: any) {
 console.log( error )
 if ( error.code === 'P2025') {
   
   throw Boom.notFound('Nothing to change my dear')
  } else {
   throw(error)
  }
  
} 
}

  
  export const remove = async (id: Number) => {
 try{
  
    return await prisma.review.delete({
        where: {
            id: Number(id),
        },
    })
} catch(error: any){
  if ( error.code === 'P2025') {
      
    throw Boom.notFound('Nothing to delete my dear')
   } else {
    throw(error)
   }
}
  }

// export function create(body: any, user_id: any, restaurant_id: number) {
//   throw new Error("Function not implemented.")
// }
