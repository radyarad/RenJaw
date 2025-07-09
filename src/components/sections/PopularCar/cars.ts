type Car = {
  id: number;
  name: string;
  price: number;
  location: string;
  image: string;
};

export const cars: Car[] = [
  {
    id: 1,
    name: "Lexus CTH200H",
    price: 200,
    location: "Jakarta",
    image: "/LexusCT200h.png",
  },
  {
    id: 2,
    name: "Jaguar F-Pace",
    price: 132,
    location: "Bandung",
    image: "/JaguarFPace.png",
  },
  {
    id: 3,
    name: "Mercedes Benz",
    price: 132,
    location: "Surabaya",
    image: "/MarcedesBenz.png",
  },
];
