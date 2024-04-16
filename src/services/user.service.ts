
import { PrismaClient } from "@prisma/client";
import Boom from "@hapi/boom"
import bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { z } from "zod";
import { createUserDtoBody } from "../validators/create-user.validator";
const prisma = new PrismaClient()


export const getAll = async () => {
   return await prisma.user.findMany( 
    {

    }
  )
  
}

 
    export const createUser = async (user: z.infer<typeof createUserDtoBody>) => {
      try {
      const { email,name, password, is_admin} = user
       return await prisma.user.create({
  
        data : {
          email ,
          name,
          password: await bcrypt.hash(user.password as string, 10) ,
          is_admin
        }
      })
    } catch (error: any){
          console.log(error);
          if (error.code == "P2002") {
              throw Boom.conflict('Email must be unique')
          }   else {
            throw(error)
          }
    }
  }

      // await bcrypt.hash(user.passsword as string, 10)
//   } catch (error: any){
//     console.log(error);
//     if (error.code == "P2002") { 
//         throw Boom.conflict('Email must be unique')
//     }   else {
//       throw(error)
//     }
//   }
// }
    
export async function login(email: string, password: string) {
  const user = await prisma.user.findFirstOrThrow({ where: { email } })

  // Compare the provided password with the stored hashed password
  const passwordMatch = await bcrypt.compare(password, user.password)
   
  if (!passwordMatch) {
      // Password does not match
      // If you want to throw a http error, you can. This is throw internal server error
      throw Error('Password not correct')
  }

  // Generate a token
  const accessToken = jwt.sign(
      { user_id: user.id, is_admin: user.is_admin },
      process.env.ACCESS_TOKEN_KEY as string,
      {
          expiresIn: '1d',
      }
  )


  const refreshToken = jwt.sign(
    { user_id: user.id, is_admin: user.is_admin },
    process.env.REFRESH_TOKEN_KEY as string,
    {
        expiresIn: '7d',
    }
)

  // Return the token to the client
  return { success: true, accessToken, refreshToken }
}

export async function refresh(userId: number) {
  const user = await prisma.user.findFirstOrThrow({ where: { id: userId } })


  // Generate a token
  const accessToken = jwt.sign(
      { userId: user.id, isAdmin: user.is_admin },
      process.env.ACCESS_TOKEN_KEY as string,
      {
          expiresIn: '1d',
      }
  )


  // Return the accessToken to the client
  return { success: true, accessToken }
}
// Refresh token - long lived token
// Access token - short lived token expires in 5 minutes



export const remove = async (user_id: any) =>{
  try{
      return  await prisma.user.delete({where: {id:user_id}})

  }catch(error:any){


  console.log(error)
  if(error.code === 'P2003'){
  throw Boom.notFound("you have todos here")
}else{
throw error
}
}
}


  