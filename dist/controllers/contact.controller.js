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
exports.remove = exports.update = exports.createContact = void 0;
const ContactService = __importStar(require("../services/contact.service"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const createContact = async (req, res, next) => {
    console.log('request params', req.params);
    try {
        const restaurant_id = Number(req.params.id);
        const data = await ContactService.createContact(req.body, req.user.user_id, restaurant_id);
        res.json(data);
    }
    catch (err) {
        next(err);
    }
};
exports.createContact = createContact;
const update = async (req, res, next) => {
    try {
        const data = req.body;
        const id = Number(req.params.id);
        const restaurant = await ContactService.update(id, data);
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
        const data = await ContactService.remove(Number(id));
        res.status(http_status_codes_1.default.NO_CONTENT).send();
    }
    catch (error) {
        next(error);
    }
};
exports.remove = remove;
//# sourceMappingURL=contact.controller.js.map