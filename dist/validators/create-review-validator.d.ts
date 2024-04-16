import { z } from 'zod';
export declare const createReviewDtoBody: z.ZodObject<{
    rating: z.ZodEnum<["1", "2", "3", "4", "5"]>;
    comment: z.ZodString;
}, "strict", z.ZodTypeAny, {
    rating: "1" | "2" | "3" | "4" | "5";
    comment: string;
}, {
    rating: "1" | "2" | "3" | "4" | "5";
    comment: string;
}>;
export declare const createReviewDto: z.ZodObject<{
    body: z.ZodObject<{
        rating: z.ZodEnum<["1", "2", "3", "4", "5"]>;
        comment: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        rating: "1" | "2" | "3" | "4" | "5";
        comment: string;
    }, {
        rating: "1" | "2" | "3" | "4" | "5";
        comment: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        rating: "1" | "2" | "3" | "4" | "5";
        comment: string;
    };
}, {
    body: {
        rating: "1" | "2" | "3" | "4" | "5";
        comment: string;
    };
}>;
export declare const updateReviewDtoBody: z.ZodObject<{
    rating: z.ZodEnum<["1", "2", "3", "4", "5"]>;
    comment: z.ZodString;
}, "strict", z.ZodTypeAny, {
    rating: "1" | "2" | "3" | "4" | "5";
    comment: string;
}, {
    rating: "1" | "2" | "3" | "4" | "5";
    comment: string;
}>;
export declare const updateReviewDto: z.ZodObject<{
    body: z.ZodObject<{
        rating: z.ZodEnum<["1", "2", "3", "4", "5"]>;
        comment: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        rating: "1" | "2" | "3" | "4" | "5";
        comment: string;
    }, {
        rating: "1" | "2" | "3" | "4" | "5";
        comment: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        rating: "1" | "2" | "3" | "4" | "5";
        comment: string;
    };
}, {
    body: {
        rating: "1" | "2" | "3" | "4" | "5";
        comment: string;
    };
}>;
export declare const removeReviewDto: z.ZodObject<{
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
//# sourceMappingURL=create-review-validator.d.ts.map