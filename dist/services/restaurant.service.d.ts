export declare const getAll: () => Promise<({
    reviews: {
        id: number;
        rating: string;
        comment: string;
        date: Date;
        user_id: number;
        restaurant_id: number;
    }[];
    contacts: {
        id: number;
        number: string;
        restaurant_id: number;
    }[];
} & {
    id: number;
    name: string;
    description: string;
    address: string;
    user_id: number;
})[]>;
export declare const createRestaurant: (body: any, user_id: number) => Promise<{
    id: number;
    name: string;
    description: string;
    address: string;
    user_id: number;
}>;
export declare const update: (id: number, body: any) => Promise<{
    id: number;
    name: string;
    description: string;
    address: string;
    user_id: number;
}>;
export declare const remove: (id: Number) => Promise<{
    id: number;
    name: string;
    description: string;
    address: string;
    user_id: number;
}>;
export declare const findOne: (id: number) => Promise<{
    id: number;
    name: string;
    description: string;
    address: string;
    user_id: number;
}>;
//# sourceMappingURL=restaurant.service.d.ts.map