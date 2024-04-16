import z from "zod";
import { createContactDtoBody } from "../validators/create-contact.validator";
export declare const createContact: (body: z.infer<typeof createContactDtoBody>, loggedInUser_id: number, restaurant_id: number) => Promise<any>;
export declare const update: (id: number, body: any) => Promise<{
    id: number;
    number: string;
    restaurant_id: number;
}>;
export declare const remove: (id: Number) => Promise<{
    id: number;
    number: string;
    restaurant_id: number;
}>;
//# sourceMappingURL=contact.service.d.ts.map