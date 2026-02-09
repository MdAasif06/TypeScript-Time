import type { Request, Response } from "express";
import type { Pet } from "../data/pet.js";
type PetQueryParams = {
    species?: string;
    adopted?: 'true' | 'false';
    minAge: string;
    maxAge: string;
};
export declare const getPets: (req: Request<{}, unknown, {}, PetQueryParams>, res: Response<Pet[]>) => void;
export declare const getPetById: (req: Request<{
    id: string;
}>, res: Response<Pet | {
    message: string;
}>) => void;
export {};
//# sourceMappingURL=pets.controller.d.ts.map