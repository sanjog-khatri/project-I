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
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const express_1 = __importDefault(require("express"));
// import { getAll } from '../controllers/todo.controller'
const ContactController = __importStar(require("../controllers/contact.controller"));
const validate_1 = require("../utils/validate");
const authentication_middleware_1 = require("../middlewares/authentication.middleware");
const create_contact_validator_1 = require("../validators/create-contact.validator");
const route = express_1.default.Router({ mergeParams: true });
route.post('/', (0, validate_1.validate)(create_contact_validator_1.createContactDto), authentication_middleware_1.authenticateToken, authentication_middleware_1.is_admin, ContactController.createContact);
route.delete('/', authentication_middleware_1.authenticateToken, authentication_middleware_1.is_admin, ContactController.remove);
route.patch('/', (0, validate_1.validate)(create_contact_validator_1.updateContactDto), authentication_middleware_1.authenticateToken, authentication_middleware_1.is_admin, ContactController.update);
exports.default = route;
//# sourceMappingURL=contact.route.js.map