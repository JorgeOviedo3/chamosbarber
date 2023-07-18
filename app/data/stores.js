import chamos_barber from "../../public/stores/chamos-barbershop.webp";
import chamos_barber2 from "../../public/stores/chamos-barbershop-2.webp";
import chamos_barber3 from "../../public/stores/chamos-barbershop-3.webp";

export const stores = [
  {
    id: "chamos-barber-1",
    name: "Chamos Barber Shop",
    address: "1497 E Osceola Pkwy, Kissimmee, FL 34744",
    gmaps: "https://goo.gl/maps/NaUEg7aq8sGH5HzSA",
    phone: "(407) 344-4410",
    employees: [
      {
        name: "Jorge",
      },
    ],
    get barbers() {
      return this.employees.length;
    },
    image: chamos_barber,
  },
  {
    id: "chamos-barber-2",
    name: "Chamos Barber Shop 2",
    address: "1976 E Osceola Pkwy, Kissimme, FL 34743",
    gmaps: "https://goo.gl/maps/uhnQ1khwpRP5gQqa7",
    phone: "(407) 201-5933",
    employees: [
      {
        name: "Jorge",
      },
    ],
    get barbers() {
      return this.employees.length;
    },
    image: chamos_barber2,
  },
  {
    id: "chamos-barber-3",
    name: "Chamos Barber Shop 3",
    address: "10395 Narcoossee Rd suit C, Orlando, FL 32832",
    gmaps: "https://goo.gl/maps/MhbhAc8T1i9EvbWG7",
    phone: "(407) 237-9038",
    employees: [
      {
        name: "Jorge",
      },
    ],
    get barbers() {
      return this.employees.length;
    },
    image: chamos_barber3,
  },
];
