import { PrismaClient } from "@prisma/client"
import  Boom from "@hapi/boom"
import { z } from "zod"
import { createRestaurantDtoBody } from "../validators/create-restaurant.validator"

const prisma = new PrismaClient()

export const getAll = async () => {
  try { 
    
  return await prisma.restaurant.findMany( { 
    include: {
        contacts: true,
        reviews: true
  } } )
    }
    // return await prisma.todo.findMany()
    
  catch (error: any) {
    
    console.log( error );

    if ( error.code === 'P2025') {
        throw Boom.notFound(' nothing to show my dear ')
    } else {
      throw (error)
    }
  }
}
  
  
  
  
  export const createRestaurant = async (body: any, user_id: number) => {
    // const { title } = body
    try {
      return await prisma.restaurant.create({

      data: {
        name : body.name,
        description : body.description,  
        address: body.address,
        user_id: user_id,
        
      }
    })
    // return 'create garne api'
  } catch( error: any) {
    console.log(error);

    if ( error.code === 'P2003') {
      throw Boom.notFound('cannot be posted')
    } else {
      throw(error)
    }
  }
}
   

// export const createRestaurant = async (body: z.infer<typeof createRestaurantDtoBody>, user_id: number) => {
//   const { address, description, name } = body


//   let createdRestro: any;
//   // ts-ignore
//   await prisma.$transaction(async (tx) => {
//     createdRestro = await tx.restaurant.create({

//       data: {

//         address,
//         description,
//         name,
//         user_id : user_id
      
//       },
//     })
    // API design pattern issues
    // await Promise.all(contactNumbers.map(contact => {
    //   return tx.contact.create({
    //     data: {
    //       restaurantId: createdRestro.id,
    //       number: contact
    //     }
    //   })
    // }))

//   })
//   return createdRestro;


// }

export const update = async (id: number, body: any) => {
  try {

   return await prisma.restaurant.update({
     data:{
       name: body.name,
       description: body.description,
       address: body.address
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
  
    return await prisma.restaurant.delete({
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

  // ( id: number ) => {
  //   try {
  //    await prisma.todo.delete ({ where: { id: id  } })
     
  //    return 'remove garne api'
    
  //  } catch (error: any){
  //    console.log( error );
 
  //    if ( error.code === 'P2025') {
  //      throw Boom.notFound(' Nothing to delete my dear')
  //    } else {
  //      throw(error)
  //    }
  //  } 
  //  }



  export const findOne = async ( id: number ) => {
    try {
     return await prisma.restaurant.findFirstOrThrow ({ 
      where: { 

      id: id 
      
    }, 
  })
   } catch (error: any){

     console.log( error )

     if ( error.code === 'P2025') {
      
      throw Boom.notFound('Nothing posted my dear')
     } else {
      throw(error)
     }
     
   } 
   }


// export function create(body: any, user_id: any) {
//   throw new Error("Function not implemented.")
// }
   