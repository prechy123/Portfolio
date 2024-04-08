import { Metadata } from "next";
import "./styles.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Prechy - Homepage",
  description:
    "Hello, i am Bamidele Precious and i am a full stack developer current with the MERN stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Header />
        <main style={{width: "100%", height: "100vh"}}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
