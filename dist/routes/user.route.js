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
const express_1 = __importDefault(require("express"));
const UserController = __importStar(require("../controllers/user.controller"));
const create_user_validator_1 = require("../validators/create-user.validator");
const validate_1 = require("../utils/validate");
const authentication_middleware_1 = require("../middlewares/authentication.middleware");
const route = express_1.default.Router();
route.get('/', UserController.getAll);
// route.get('/:id', UserController.findOne)
route.post('/login', UserController.login);
route.post('/signup', (0, validate_1.validate)(create_user_validator_1.createUserDto), UserController.createUser);
route.post('/refresh', authentication_middleware_1.authenticateRefreshToken, UserController.refresh);
route.delete('/:id', UserController.remove);
// route.delete('/:id', UserController.remove)
// route.patch('/:id', UserController.update)
exports.default = route;
//# sourceMappingURL=user.route.js.map