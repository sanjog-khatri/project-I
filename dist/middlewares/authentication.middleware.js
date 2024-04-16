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
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_admin = exports.authenticateRefreshToken = exports.authenticateToken = void 0;
const jwt = __importStar(require("jsonwebtoken"));
function authenticateToken(req, res, next) {
    // Extract the token from the request headers
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res
            .status(401)
            .json({ success: false, message: 'Missing authentication token' });
    }
    try {
        // Verify and decode the token
        const decodedToken = jwt.verify(token, 'random-secret for access token');
        console.log('but not here right?');
        // Attach the decoded token to the request object
        // @ts-ignore
        req.user = decodedToken;
        next(); // Proceed to the next middleware or route handler
    }
    catch (error) {
        return res
            .status(403)
            .json({ success: false, message: 'Invalid authentication token' });
    }
}
exports.authenticateToken = authenticateToken;
function authenticateRefreshToken(req, res, next) {
    // Extract the token from the request headers
    const token = req.cookies.refreshToken && req.cookies.refreshToken.split(' ')[1];
    if (!token) {
        return res
            .status(401)
            .json({ success: false, message: 'Missing authentication token' });
    }
    try {
        // Verify and decode the token
        const decodedToken = jwt.verify(token, process.env.REFRESH_TOKEN_KEY);
        // Attach the decoded token to the request object
        // @ts-ignore
        req.user = decodedToken;
        next(); // Proceed to the next middleware or route handler
    }
    catch (error) {
        return res
            .status(403)
            .json({ success: false, message: 'Invalid authentication token' });
    }
}
exports.authenticateRefreshToken = authenticateRefreshToken;
function is_admin(req, res, next) {
    // @ts-ignore
    const { user } = req;
    if (user && user.is_admin) {
        next(); // Proceed to the next middleware or route handler
    }
    else {
        return res.status(403).json({
            success: false,
            message: 'Unauthorized: User is not an admin',
        });
    }
}
exports.is_admin = is_admin;
//# sourceMappingURL=authentication.middleware.js.map