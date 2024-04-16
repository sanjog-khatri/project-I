import { z } from 'zod'
import { is_admin } from '../middlewares/authentication.middleware'

export const createContactDtoBody = z.object ({
    
        number: z.string({
            required_error: 'Contact Number is required', 

        }),

        is_admin: z.boolean().optional().default(true)
        
    }).strict()

export const createContactDto = z.object ({
    body: createContactDtoBody

})

export const updateContactDtoBody = z.object ({
    
    number: z.string({
        required_error: 'Contact Number is required', 

    }),

        is_admin: z.boolean().optional().default(false)

        
    }).strict()

    export const updateContactDto = z.object ({
        body: updateContactDtoBody

    })

export const removeContactDto = z.object ({
    body: z.object({
        id: z.number({
            required_error: 'Id is required', 

        }),

        // active: z.boolean({
        //     required_error: 'Active status is required'

        // })
    }).strict(),
})