import { Request, Response, NextFunction } from 'express';
export declare function authenticateToken(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export declare function authenticateRefreshToken(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export declare function is_admin(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=authentication.middleware.d.ts.map