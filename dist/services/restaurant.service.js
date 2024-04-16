"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOne = exports.remove = exports.update = exports.createRestaurant = exports.getAll = void 0;
const client_1 = require("@prisma/client");
const boom_1 = __importDefault(require("@hapi/boom"));
const prisma = new client_1.PrismaClient();
const getAll = async () => {
    try {
        return await prisma.restaurant.findMany({
            include: {
                contacts: true,
                reviews: true
            }
        });
    }
    // return await prisma.todo.findMany()
    catch (error) {
        console.log(error);
        if (error.code === 'P2025') {
            throw boom_1.default.notFound(' nothing to show my dear ');
        }
        else {
            throw (error);
        }
    }
};
exports.getAll = getAll;
const createRestaurant = async (body, user_id) => {
    // const { title } = body
    try {
        return await prisma.restaurant.create({
            data: {
                name: body.name,
                description: body.description,
                address: body.address,
                user_id: user_id,
            }
        });
        // return 'create garne api'
    }
    catch (error) {
        console.log(error);
        if (error.code === 'P2003') {
            throw boom_1.default.notFound('cannot be posted');
        }
        else {
            throw (error);
        }
    }
};
exports.createRestaurant = createRestaurant;
// export const createRestaurant = async (body: z.infer<typeof createRestaurantDtoBody>, user_id: number) => {
//   const { address, description, name } = body
//   let createdRestro: any;
//   // ts-ignore
//   await prisma.$transaction(async (tx) => {
//     createdRestro = await tx.restaurant.create({
//       data: {
//         address,
//         description,
//         name,
//         user_id : user_id
//       },
//     })
// API design pattern issues
// await Promise.all(contactNumbers.map(contact => {
//   return tx.contact.create({
//     data: {
//       restaurantId: createdRestro.id,
//       number: contact
//     }
//   })
// }))
//   })
//   return createdRestro;
// }
const update = async (id, body) => {
    try {
        return await prisma.restaurant.update({
            data: {
                name: body.name,
                description: body.description,
                address: body.address
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
        return await prisma.restaurant.delete({
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
// ( id: number ) => {
//   try {
//    await prisma.todo.delete ({ where: { id: id  } })
//    return 'remove garne api'
//  } catch (error: any){
//    console.log( error );
//    if ( error.code === 'P2025') {
//      throw Boom.notFound(' Nothing to delete my dear')
//    } else {
//      throw(error)
//    }
//  } 
//  }
const findOne = async (id) => {
    try {
        return await prisma.restaurant.findFirstOrThrow({
            where: {
                id: id
            },
        });
    }
    catch (error) {
        console.log(error);
        if (error.code === 'P2025') {
            throw boom_1.default.notFound('Nothing posted my dear');
        }
        else {
            throw (error);
        }
    }
};
exports.findOne = findOne;
// export function create(body: any, user_id: any) {
//   throw new Error("Function not implemented.")
// }
//# sourceMappingURL=restaurant.service.js.map