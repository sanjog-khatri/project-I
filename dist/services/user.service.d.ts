import { z } from "zod";
import { createUserDtoBody } from "../validators/create-user.validator";
export declare const getAll: () => Promise<{
    id: number;
    email: string;
    name: string;
    password: string;
    is_admin: boolean;
}[]>;
export declare const createUser: (user: z.infer<typeof createUserDtoBody>) => Promise<{
    id: number;
    email: string;
    name: string;
    password: string;
    is_admin: boolean;
}>;
export declare function login(email: string, password: string): Promise<{
    success: boolean;
    accessToken: string;
    refreshToken: string;
}>;
export declare function refresh(userId: number): Promise<{
    success: boolean;
    accessToken: string;
}>;
export declare const remove: (user_id: any) => Promise<{
    id: number;
    email: string;
    name: string;
    password: string;
    is_admin: boolean;
}>;
//# sourceMappingURL=user.service.d.ts.map