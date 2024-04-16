import { z } from 'zod'

export const createUserDtoBody = z.object ({

    email: z.string({
        required_error: 'email is required', 

    }),
    name: z.string({
        required_error: 'name  is required',

    }),
    password: z.string({
        required_error: 'passsword  is required',

    }),

    is_admin: z.boolean().optional().default(false)

}).strict()

export const createUserDto = z.object ({
    body: createUserDtoBody
})
