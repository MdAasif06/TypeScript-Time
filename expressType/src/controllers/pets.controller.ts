import type { Request,Response } from "express";
import type { Pet } from "../data/pet.js";
import { pets } from "../data/pet.js";


type PetQueryParams={
  species?:string;
  adopted?:'true'|'false';
  minAge:string;
  maxAge:string
}

export const getPets= (req:Request<{},unknown,{},PetQueryParams>, res:Response<Pet[]>):void => {
  const {species,adopted,minAge,maxAge}=req.query
  let filterPets:Pet[]=pets;
  if(species){
    filterPets=filterPets.filter((pet:Pet):boolean=>
      pet.species.toLowerCase()=== species.toLowerCase()
    )
  }
  if(adopted){
    filterPets=filterPets.filter((pet:Pet):boolean=>
      pet.adopted === JSON.parse(adopted)
    )
  }
  if(minAge){
    filterPets=filterPets.filter((pet:Pet):boolean=>
      pet.age >= JSON.parse(minAge)
    )
  }
  if(maxAge){
    filterPets=filterPets.filter((pet:Pet):boolean=>
      pet.age <= JSON.parse(maxAge)
    )
  }
  res.json(filterPets);
};

export const getPetById=(req:Request<{id:string}>,res:Response<Pet|{message:string}>):void=>{
   const {id}=req.params;
   const pet:Pet|undefined=pets.find((pet:Pet):boolean=>pet.id.toString()===id)
   if(pet){
    res.json(pet)
   }
   else{
    res.status(404).json({message:"No pet available of this id"})
   }
}