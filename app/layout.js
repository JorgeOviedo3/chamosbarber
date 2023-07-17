import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Rubik } from 'next/font/google'
import "./globals.css";

const rubik = Rubik({
  weight: ["500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning={true} className={`${ rubik.variable } font-sans`}>
        <Navbar />
        <div className="mt-[64px] md:mt-[70px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
