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
    "Experience the ultimate in men's grooming at Chamos Barber Shop. Our team of skilled barbers is dedicated to delivering exceptional haircuts, grooming, and styling services tailored specifically to you. Step into our world of timeless style and masculine elegance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning={true} className={`${rubik.variable} font-sans`}>
        <Navbar />
        <div className="mt-[64px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
