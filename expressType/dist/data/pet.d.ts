type Pet = {
    id: number;
    name: string;
    species: string;
    adopted: boolean;
    age: number;
    breed: string;
    intakeDate: Date;
    adoptionDate?: Date;
    medicalReport: {
        vaccinations: string[];
        weight: number;
        microchipId: string | null;
    };
    photo: string;
};
export declare const pets: Pet[];
export {};
//# sourceMappingURL=pet.d.ts.map