import { PrismaClient } from "@prisma/client"
import  Boom from "@hapi/boom"
import  z  from "zod"
import { createContactDtoBody } from "../validators/create-contact.validator"

const prisma = new PrismaClient()

export const createContact = async (body: z.infer<typeof createContactDtoBody>, 
  loggedInUser_id: number, 
  restaurant_id: number) => {
  const { number } = body

  let createdRestro: any;
  // ts-ignore
  await prisma.$transaction(async (tx) => {
    createdRestro = await tx.contact.create({
      data: {
        
        number,
        restaurant_id,
        id: loggedInUser_id,
        
      },
    })
  })
  
    return createdRestro;
}
// export async function createContact(restaurant_id: string, contactInfo: any): Promise<any> {
//   // Ensure the restaurant exists
//   const restaurantExists = await prisma.restaurant.findUnique({
//     where: { id: Number(restaurant_id) },
//   });

//   if (!restaurantExists) {
//     throw new Error('Restaurant not found');
//   }

//   // Create a new contact and associate it with the restaurant
//   const contact = await prisma.contact.create({
//     data: {
//       ...contactInfo,
//       restaurant_id,
//     },
//   });

//   return contact;
// }

// export default {
//   createContact,
// };   



export const update = async (id: number, body: any) => {
  try {

   return await prisma.contact.update({
     data:{
       
        number: body.number
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
  
    return await prisma.contact.delete({
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