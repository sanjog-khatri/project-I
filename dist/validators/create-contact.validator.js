"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeContactDto = exports.updateContactDto = exports.updateContactDtoBody = exports.createContactDto = exports.createContactDtoBody = void 0;
const zod_1 = require("zod");
exports.createContactDtoBody = zod_1.z.object({
    number: zod_1.z.string({
        required_error: 'Contact Number is required',
    }),
    is_admin: zod_1.z.boolean().optional().default(true)
}).strict();
exports.createContactDto = zod_1.z.object({
    body: exports.createContactDtoBody
});
exports.updateContactDtoBody = zod_1.z.object({
    number: zod_1.z.string({
        required_error: 'Contact Number is required',
    }),
    is_admin: zod_1.z.boolean().optional().default(false)
}).strict();
exports.updateContactDto = zod_1.z.object({
    body: exports.updateContactDtoBody
});
exports.removeContactDto = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.number({
            required_error: 'Id is required',
        }),
        // active: z.boolean({
        //     required_error: 'Active status is required'
        // })
    }).strict(),
});
//# sourceMappingURL=create-contact.validator.js.map