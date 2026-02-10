import type { Response, Request, NextFunction } from "express";
export declare const validateNumricId: (req: Request<{
    id: string;
}>, res: Response<{
    message: string;
}>, next: NextFunction) => void;
export declare const pleaseAuth: (req: Request<{}, unknown, {
    password?: string;
}>, res: Response<{
    message: string;
}>, next: NextFunction) => void;
//# sourceMappingURL=pets.middleware.d.ts.map