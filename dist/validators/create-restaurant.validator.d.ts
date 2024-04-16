import { z } from 'zod';
export declare const createRestaurantDtoBody: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    address: z.ZodString;
    is_admin: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strict", z.ZodTypeAny, {
    name: string;
    is_admin: boolean;
    description: string;
    address: string;
}, {
    name: string;
    description: string;
    address: string;
    is_admin?: boolean | undefined;
}>;
export declare const createRestaurantDto: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodString;
        address: z.ZodString;
        is_admin: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        name: string;
        is_admin: boolean;
        description: string;
        address: string;
    }, {
        name: string;
        description: string;
        address: string;
        is_admin?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        name: string;
        is_admin: boolean;
        description: string;
        address: string;
    };
}, {
    body: {
        name: string;
        description: string;
        address: string;
        is_admin?: boolean | undefined;
    };
}>;
export declare const updateRestaurntDtoBody: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    address: z.ZodString;
    is_admin: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strict", z.ZodTypeAny, {
    name: string;
    is_admin: boolean;
    description: string;
    address: string;
}, {
    name: string;
    description: string;
    address: string;
    is_admin?: boolean | undefined;
}>;
export declare const updateRestaurantDto: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodString;
        address: z.ZodString;
        is_admin: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        name: string;
        is_admin: boolean;
        description: string;
        address: string;
    }, {
        name: string;
        description: string;
        address: string;
        is_admin?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        name: string;
        is_admin: boolean;
        description: string;
        address: string;
    };
}, {
    body: {
        name: string;
        description: string;
        address: string;
        is_admin?: boolean | undefined;
    };
}>;
export declare const removeRestaurantDto: z.ZodObject<{
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
export declare const findOneRestaurantDto: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodString;
        address: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        description: string;
        address: string;
    }, {
        name: string;
        description: string;
        address: string;
    }>;
}, "strict", z.ZodTypeAny, {
    body: {
        name: string;
        description: string;
        address: string;
    };
}, {
    body: {
        name: string;
        description: string;
        address: string;
    };
}>;
//# sourceMappingURL=create-restaurant.validator.d.ts.map