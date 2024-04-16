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
exports.remove = exports.update = exports.createReview = void 0;
const ReviewService = __importStar(require("../services/review.service"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const createReview = async (req, res, next) => {
    try {
        console.log(req.body, ' is request body');
        const restaurant_id = Number(req.params.id);
        const review = await ReviewService.createReview(req.body, req.user.user_id, restaurant_id);
        res.status(http_status_codes_1.default.CREATED).send(review);
    }
    catch (error) {
        next(error);
    }
};
exports.createReview = createReview;
const update = async (req, res, next) => {
    try {
        const data = req.body;
        const id = Number(req.params.id);
        const restaurant = await ReviewService.update(id, data);
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
        const data = await ReviewService.remove(Number(id));
        res.status(http_status_codes_1.default.NO_CONTENT).send();
    }
    catch (error) {
        next(error);
    }
};
exports.remove = remove;
//# sourceMappingURL=review.controller.js.map