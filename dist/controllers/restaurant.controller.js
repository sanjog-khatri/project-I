"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOne = exports.remove = exports.update = exports.create = exports.getAll = void 0;
const RestaurantService = __importStar(require("../services/restaurant.service"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const getAll = async (req, res, next) => {
    try {
        // console.log((req as any).user)
        // const userId = (req as any).user.userId;
        const data = await RestaurantService.getAll();
        res.json(data);
    }
    catch (error) {
        next(error);
    }
};
exports.getAll = getAll;
const create = async (req, res, next) => {
    try {
        console.log(req.body, ' is request body');
        const restaurant = await RestaurantService.createRestaurant(req.body, req.user.user_id);
        res.status(http_status_codes_1.default.CREATED).send(restaurant);
    }
    catch (error) {
        next(error);
    }
};
exports.create = create;
const update = async (req, res, next) => {
    try {
        const data = req.body;
        const id = Number(req.params.id);
        const restaurant = await RestaurantService.update(id, data);
        res.status(http_status_codes_1.default.OK).send(restaurant);
    }
    catch (error) {
        next(error);
    }
};
exports.update = update;
const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        // @TODO: Handle errors
        const data = await RestaurantService.remove(Number(id));
        res.status(http_status_codes_1.default.NO_CONTENT).send();
    }
    catch (error) {
        next(error);
    }
};
exports.remove = remove;
// // try {
// //   const id = Number(req.params.id)
// // console.log(id, ' request params ko id yo ho hai')
// // const todos = await TodoService.remove(id)
// // res.status(HttpStatusCodes.GONE).send()
// // } catch (error) {
// // next(error)
// // }
const findOne = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const data = await RestaurantService.findOne(id);
        res.status(http_status_codes_1.default.ACCEPTED).send(data);
    }
    catch (error) {
        next(error);
    }
};
exports.findOne = findOne;
// res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
// if (!todo) {
//   res.status(HttpStatusCodes.NOT_FOUND).send('Todo not found');
// } else {
//   res.status(HttpStatusCodes.ACCEPTED).send(todo);
// }
//# sourceMappingURL=restaurant.controller.js.map