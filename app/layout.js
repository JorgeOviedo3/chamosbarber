import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  weight: ["500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata = {
  title: "Chamos Barber Shop - Elevating Men's Grooming",
  description:
    "Experience the ultimate in men's grooming at Chamos Barber Shop. Our team of skilled barbers is dedicated to delivering exceptional haircuts, grooming, and styling services tailored specifically to you. Step into our world of timeless style and masculine elegance.",
  openGraph: {
    title: "Chamos Barber Shop - Elevating Men's Grooming",
    description:
      "Experience the ultimate in men's grooming at Chamos Barber Shop. Our team of skilled barbers is dedicated to delivering exceptional haircuts, grooming, and styling services tailored specifically to you. Step into our world of timeless style and masculine elegance.",
    url: `https://www.chamosbarbershop.com/`,
    siteName: "Chamos Barber Shop",
    images: [
      {
        url: "https://drive.google.com/drive/u/6/folders/1l0RsUNl9j961nHTgi7gTWIG1zbbM757A",
        width: 727,
        height: 268,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "./favicon.ico",
  },
  generator: "Next.js",
  applicationName: "Chamos Barber Shop",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Barber Shop",
    "Men's barber shop",
    "Chamos Barber Shop",
    "Men's haircut",
    "Professional barber",
    "Shaving and beard grooming",
  ],
  authors: [
    { name: "Sabah Rahal", url: "https://github.com/sabahrahal" },
    { name: "Jorge Oviedo", url: "https://github.com/JorgeOviedo3" },
  ],
  colorScheme: "light",
  creator: "Sabah Rahal",
  publisher: "Jorge Oviedo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning={true}
        className={`${rubik.variable} font-sans`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
