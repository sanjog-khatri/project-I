"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import todoRouter from './routes/todo.route'
const user_route_1 = __importDefault(require("./routes/user.route"));
const restaurant_route_1 = __importDefault(require("./routes/restaurant.route"));
const contact_route_1 = __importDefault(require("./routes/contact.route"));
const review_route_1 = __importDefault(require("./routes/review.route"));
const cors_1 = __importDefault(require("cors"));
const errors_middleware_1 = require("./middlewares/errors.middleware");
const PORT = 4000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200
}));
app.use('/users', user_route_1.default);
app.use('/restros', restaurant_route_1.default);
app.use('/contacts', contact_route_1.default);
app.use('/review', review_route_1.default);
// app.use(compression())
app.listen(PORT, () => {
    console.log('Running on port', PORT);
});
app.use(errors_middleware_1.genericErrorHandler);
exports.default = app;
//# sourceMappingURL=index.js.map