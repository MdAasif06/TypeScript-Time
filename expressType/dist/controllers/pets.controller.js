import { pets } from "../data/pet.js";
export const getPets = (req, res) => {
    const { species, adopted, minAge, maxAge } = req.query;
    let filterPets = pets;
    if (species) {
        filterPets = filterPets.filter((pet) => pet.species.toLowerCase() === species.toLowerCase());
    }
    if (adopted) {
        filterPets = filterPets.filter((pet) => pet.adopted === JSON.parse(adopted));
    }
    if (minAge) {
        filterPets = filterPets.filter((pet) => pet.age >= JSON.parse(minAge));
    }
    if (maxAge) {
        filterPets = filterPets.filter((pet) => pet.age <= JSON.parse(maxAge));
    }
    res.json(filterPets);
};
export const getPetById = (req, res) => {
    const { id } = req.params;
    const pet = pets.find((pet) => pet.id.toString() === id);
    if (pet) {
        res.json(pet);
    }
    else {
        res.status(404).json({ message: "No pet available of this id" });
    }
};
//# sourceMappingURL=pets.controller.js.map