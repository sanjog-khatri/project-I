import { z } from 'zod'
import { is_admin } from '../middlewares/authentication.middleware'

export const createRestaurantDtoBody = z.object ({
    
        name: z.string({
            required_error: 'Name is required', 

        }),

        description: z.string({
            required_error: 'Description is required'

        }),

        address: z.string({
            required_error: 'address is required'
        }),

        is_admin: z.boolean().optional().default(true)
        
    }).strict()

export const createRestaurantDto = z.object ({
    body: createRestaurantDtoBody

})

export const updateRestaurntDtoBody = z.object ({
    
        name: z.string({
            required_error:  'name is required', 

        }),

        description: z.string({
            required_error: 'description is required',

        }),

        address: z.string({
            required_error: 'address is required',
        }),

        is_admin: z.boolean().optional().default(false)

        
    }).strict()

    export const updateRestaurantDto = z.object ({
        body: updateRestaurntDtoBody

    })

export const removeRestaurantDto = z.object ({
    body: z.object({
        id: z.number({
            required_error: 'Id is required', 

        }),

        // active: z.boolean({
        //     required_error: 'Active status is required'

        // })
    }).strict(),
})



export const findOneRestaurantDto = z.object ({
    body: z.object({
        name: z.string({
            required_error: 'Name is not given', 

        }),

        description: z.string({
            required_error: 'Description is not given', 

        }),

        address: z.string({
            required_error: 'address is not given', 

        }),

        })

    }).strict()

// export const getAllTodoDto = z.object ({
//     body: z.object({
//         title: z.string({
//             required_error: 'Name is required', 

//         }),

//         active: z.boolean({
//             required_error: 'Active status is required'

//         })
//     }).strict(),
// })