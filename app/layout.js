import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Just | Choose",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
