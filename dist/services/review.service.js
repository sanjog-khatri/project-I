"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.createReview = void 0;
const client_1 = require("@prisma/client");
const boom_1 = __importDefault(require("@hapi/boom"));
const prisma = new client_1.PrismaClient();
const createReview = async (body, loggedInUser_id, restaurant_id) => {
    const { comment, rating } = body;
    let createdRestro;
    // ts-ignore
    await prisma.$transaction(async (tx) => {
        createdRestro = await tx.review.create({
            data: {
                comment,
                date: new Date(),
                restaurant_id,
                user_id: loggedInUser_id,
                rating: rating
            },
        });
    });
    return createdRestro;
};
exports.createReview = createReview;
// API design pattern issues
// await Promise.all(contactNumbers.map(contact => {
//   return tx.contact.create({
//     data: {
//       restaurantId: createdRestro.id,
//       number: contact
//     }
//   })
// }))
// export const create = async (body: any) => {
//   // const { title } = body
//   try {
//     return await prisma.review.create({
//     data: {
//       rating : body.rating,
//       comment : body.comment,  
//       date: body.date,
//     }
//     })
//     // return 'create garne api'
//   } catch( error: any) {
//     console.log(error);
//     if ( error.code === 'P2003') {
//       throw Boom.notFound('cannot be posted')
//     } else {
//       throw(error)
//     }
//   }
// }
const update = async (id, body) => {
    try {
        const rating = body.rating;
        return await prisma.review.update({
            data: {
                comment: body.comment,
                date: new Date(),
                rating: body.rating
            },
            where: {
                id: id
            }
        });
    }
    catch (error) {
        console.log(error);
        if (error.code === 'P2025') {
            throw boom_1.default.notFound('Nothing to change my dear');
        }
        else {
            throw (error);
        }
    }
};
exports.update = update;
const remove = async (id) => {
    try {
        return await prisma.review.delete({
            where: {
                id: Number(id),
            },
        });
    }
    catch (error) {
        if (error.code === 'P2025') {
            throw boom_1.default.notFound('Nothing to delete my dear');
        }
        else {
            throw (error);
        }
    }
};
exports.remove = remove;
// export function create(body: any, user_id: any, restaurant_id: number) {
//   throw new Error("Function not implemented.")
// }
//# sourceMappingURL=review.service.js.map