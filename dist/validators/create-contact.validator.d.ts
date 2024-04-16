import { z } from 'zod';
export declare const createContactDtoBody: z.ZodObject<{
    number: z.ZodString;
    is_admin: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strict", z.ZodTypeAny, {
    number: string;
    is_admin: boolean;
}, {
    number: string;
    is_admin?: boolean | undefined;
}>;
export declare const createContactDto: z.ZodObject<{
    body: z.ZodObject<{
        number: z.ZodString;
        is_admin: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        number: string;
        is_admin: boolean;
    }, {
        number: string;
        is_admin?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        number: string;
        is_admin: boolean;
    };
}, {
    body: {
        number: string;
        is_admin?: boolean | undefined;
    };
}>;
export declare const updateContactDtoBody: z.ZodObject<{
    number: z.ZodString;
    is_admin: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strict", z.ZodTypeAny, {
    number: string;
    is_admin: boolean;
}, {
    number: string;
    is_admin?: boolean | undefined;
}>;
export declare const updateContactDto: z.ZodObject<{
    body: z.ZodObject<{
        number: z.ZodString;
        is_admin: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        number: string;
        is_admin: boolean;
    }, {
        number: string;
        is_admin?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        number: string;
        is_admin: boolean;
    };
}, {
    body: {
        number: string;
        is_admin?: boolean | undefined;
    };
}>;
export declare const removeContactDto: z.ZodObject<{
    body: z.ZodObject<{
        id: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        id: number;
    }, {
        id: number;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        id: number;
    };
}, {
    body: {
        id: number;
    };
}>;
//# sourceMappingURL=create-contact.validator.d.ts.map