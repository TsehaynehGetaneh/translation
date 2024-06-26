import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/lib/react-toastify/ToastProvider";

const inter = Open_Sans({ subsets: ["latin"] });

// import {Navbar} from "@/components/Navbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full">
      <body
        className={
          inter.className +
          "w-full mx-auto flex flex-col items-center justify-center"
        }
      >
        <Navbar />
        <div className="mt-16 w-full">
          <ToastProvider>{children}</ToastProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
