import { z } from 'zod';
export declare const createUserDtoBody: z.ZodObject<{
    email: z.ZodString;
    name: z.ZodString;
    password: z.ZodString;
    is_admin: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strict", z.ZodTypeAny, {
    email: string;
    name: string;
    password: string;
    is_admin: boolean;
}, {
    email: string;
    name: string;
    password: string;
    is_admin?: boolean | undefined;
}>;
export declare const createUserDto: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
        name: z.ZodString;
        password: z.ZodString;
        is_admin: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        email: string;
        name: string;
        password: string;
        is_admin: boolean;
    }, {
        email: string;
        name: string;
        password: string;
        is_admin?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        email: string;
        name: string;
        password: string;
        is_admin: boolean;
    };
}, {
    body: {
        email: string;
        name: string;
        password: string;
        is_admin?: boolean | undefined;
    };
}>;
//# sourceMappingURL=create-user.validator.d.ts.map