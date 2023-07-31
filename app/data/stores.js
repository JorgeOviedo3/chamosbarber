import chamos_barber from "../../public/stores/chamos-barbershop.webp";
import chamos_barber2 from "../../public/stores/chamos-barbershop-2.webp";
import chamos_barber3 from "../../public/stores/chamos-barbershop-3.webp";

export const stores = [
  {
    id: "chamos-barber-1",
    name: "Chamos Barber Shop",
    address: "1497 E Osceola Pkwy, Kissimmee, FL 34744",
    gmaps: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.5877033038178!2d-81.3842976!3d28.341076400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd86f7e6cf10a1%3A0xc8909035d3110943!2s1497%20E%20Osceola%20Pkwy%2C%20Kissimmee%2C%20FL%2034744%2C%20USA!5e0!3m2!1sen!2ses!4v1689898322843!5m2!1sen!2ses"
        width="auto"
        height="450"
        className="w-full"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
    phone: "(407) 344-4410",
    booksy: "",
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
    gmaps: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.500352357892!2d-81.36719252381639!3d28.3437186971362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd864855990837%3A0x64aa795a5d760985!2s1976%20E%20Osceola%20Pkwy%2C%20Kissimmee%2C%20FL%2034743%2C%20USA!5e0!3m2!1sen!2ses!4v1689898405640!5m2!1sen!2ses"
        width="auto"
        className="w-full"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
    phone: "(407) 201-5933",
    booksy: "https://booksy.com/en-us/799372_chamos-2-barbershop_barber-shop_134766_kissimmee",
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
    gmaps: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.100162395588!2d-81.24493382381453!3d28.416234393868763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7618d13aaac85%3A0x5b254113e79d8845!2s10395%20Narcoossee%20Rd%2C%20Orlando%2C%20FL%2032832%2C%20USA!5e0!3m2!1sen!2ses!4v1689898454571!5m2!1sen!2ses"
        width="auto"
        className="w-full"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
    phone: "(407) 237-9038",
    booksy: "https://booksy.com/en-us/989139_chamos-barbershop-3_barber-shop_134763_orlando",
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
