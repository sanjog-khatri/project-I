"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneRestaurantDto = exports.removeRestaurantDto = exports.updateRestaurantDto = exports.updateRestaurntDtoBody = exports.createRestaurantDto = exports.createRestaurantDtoBody = void 0;
const zod_1 = require("zod");
exports.createRestaurantDtoBody = zod_1.z.object({
    name: zod_1.z.string({
        required_error: 'Name is required',
    }),
    description: zod_1.z.string({
        required_error: 'Description is required'
    }),
    address: zod_1.z.string({
        required_error: 'address is required'
    }),
    is_admin: zod_1.z.boolean().optional().default(true)
}).strict();
exports.createRestaurantDto = zod_1.z.object({
    body: exports.createRestaurantDtoBody
});
exports.updateRestaurntDtoBody = zod_1.z.object({
    name: zod_1.z.string({
        required_error: 'name is required',
    }),
    description: zod_1.z.string({
        required_error: 'description is required',
    }),
    address: zod_1.z.string({
        required_error: 'address is required',
    }),
    is_admin: zod_1.z.boolean().optional().default(false)
}).strict();
exports.updateRestaurantDto = zod_1.z.object({
    body: exports.updateRestaurntDtoBody
});
exports.removeRestaurantDto = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.number({
            required_error: 'Id is required',
        }),
        // active: z.boolean({
        //     required_error: 'Active status is required'
        // })
    }).strict(),
});
exports.findOneRestaurantDto = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is not given',
        }),
        description: zod_1.z.string({
            required_error: 'Description is not given',
        }),
        address: zod_1.z.string({
            required_error: 'address is not given',
        }),
    })
}).strict();
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
//# sourceMappingURL=create-restaurant.validator.js.map