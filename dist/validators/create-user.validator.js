"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserDto = exports.createUserDtoBody = void 0;
const zod_1 = require("zod");
exports.createUserDtoBody = zod_1.z.object({
    email: zod_1.z.string({
        required_error: 'email is required',
    }),
    name: zod_1.z.string({
        required_error: 'name  is required',
    }),
    password: zod_1.z.string({
        required_error: 'passsword  is required',
    }),
    is_admin: zod_1.z.boolean().optional().default(false)
}).strict();
exports.createUserDto = zod_1.z.object({
    body: exports.createUserDtoBody
});
//# sourceMappingURL=create-user.validator.js.map