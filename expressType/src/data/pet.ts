// there are two way to define type first inline and second is use type
// 1st way
type Pet = {
  id: number;
  name: string;
  species: string;
  adopted: boolean;
  age: number;
  breed: string;
  intakeDate: Date;
  adoptionDate?:Date,
  medicalReport: {
    vaccinations: string[];
    weight: number;
    microchipId: string | null;
  };
  photo: string;
};

// 2nd way
// const pet:{
//     name:string,
//     species:string,
//     adopted:boolean,
//     age:number
// }={
//     name:"Runik",
//     species:"Cat",
//     adopted:true,
//     age:12
// }
export const pets: Pet[] = [
  {
    id: 1,
    name: "Rubik",
    species: "cat",
    breed: "Persian",
    age: 8,
    adopted: true,
    intakeDate: new Date("2025-06-15"),
    medicalReport: {
      vaccinations: ["Rabies", "Distemper"],
      weight: 4.5,
      microchipId: null,
    },
    photo: "rubik-persian.jpg",
  },
  {
    id: 2,
    name: "Bella",
    species: "dog",
    breed: "Border Collie",
    age: 3,
    adopted: false,
    intakeDate: new Date("2025-01-22"),
    adoptionDate: new Date("2024-02-15"),  
    medicalReport: {
      vaccinations: ["Rabies", "Parvovirus"],
      weight: 18.5,
      microchipId: "MC-99231",
    },
    photo: "bella-border-collie.jpg",
  },
  {
    id: 3,
    name: "Max",
    species: "dog",
    breed: "Labrador",
    age: 5,
    adopted: true,
    intakeDate: new Date("2024-11-10"),
    medicalReport: {
      vaccinations: ["Rabies", "Distemper", "Parvovirus"],
      weight: 25.2,
      microchipId: "MC-77123",
    },
    photo: "max-labrador.jpg",
  },
  {
    id: 4,
    name: "Luna",
    species: "cat",
    breed: "Siamese",
    age: 2,
    adopted: false,
    intakeDate: new Date("2025-02-05"),
    medicalReport: {
      vaccinations: ["Rabies"],
      weight: 3.8,
      microchipId: null,
    },
    photo: "luna-siamese.jpg",
  },
  {
    id: 5,
    name: "Charlie",
    species: "dog",
    breed: "Beagle",
    age: 4,
    adopted: true,
    intakeDate: new Date("2024-09-18"),
    medicalReport: {
      vaccinations: ["Rabies", "Distemper"],
      weight: 12.3,
      microchipId: "MC-55890",
    },
    photo: "charlie-beagle.jpg",
  },
  {
    id: 6,
    name: "Milo",
    species: "cat",
    breed: "Maine Coon",
    age: 6,
    adopted: false,
    intakeDate: new Date("2025-03-12"),
    medicalReport: {
      vaccinations: ["Rabies", "FVRCP"],
      weight: 6.9,
      microchipId: null,
    },
    photo: "milo-maine-coon.jpg",
  },
  {
    id: 7,
    name: "Rocky",
    species: "dog",
    breed: "German Shepherd",
    age: 7,
    adopted: true,
    intakeDate: new Date("2024-08-02"),
    medicalReport: {
      vaccinations: ["Rabies", "Distemper", "Parvovirus"],
      weight: 32.0,
      microchipId: "MC-33421",
    },
    photo: "rocky-german-shepherd.jpg",
  },
  {
    id: 8,
    name: "Coco",
    species: "bird",
    breed: "Parrot",
    age: 2,
    adopted: false,
    intakeDate: new Date("2025-04-01"),
    medicalReport: {
      vaccinations: [],
      weight: 0.9,
      microchipId: null,
    },
    photo: "coco-parrot.jpg",
  },
  {
    id: 9,
    name: "Oliver",
    species: "cat",
    breed: "British Shorthair",
    age: 5,
    adopted: true,
    intakeDate: new Date("2024-10-27"),
    medicalReport: {
      vaccinations: ["Rabies", "FVRCP"],
      weight: 5.1,
      microchipId: "MC-88765",
    },
    photo: "oliver-british-shorthair.jpg",
  },
  {
    id: 10,
    name: "Daisy",
    species: "dog",
    breed: "Golden Retriever",
    age: 3,
    adopted: false,
    intakeDate: new Date("2025-05-20"),
    medicalReport: {
      vaccinations: ["Rabies", "Distemper", "Parvovirus"],
      weight: 22.4,
      microchipId: null,
    },
    photo: "daisy-golden-retriever.jpg",
  },
];
