import { Metadata } from "next";
import "./styles.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Barlow } from "next/font/google";
import { Provider } from "@/utils/providers";

export const metadata: Metadata = {
  title: "Prechy - Home page",
  description:
    "Hello, i am Bamidele Precious and i am a full stack developer current with the MERN stack",
};

const barlow = Barlow({
  weight: "700",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${barlow.className} bg-white text-black dark:bg-black dark:text-white`}
        suppressHydrationWarning
      >
        <Provider>
          <Header />
          <main style={{ width: "100%", minHeight: "100vh", padding: "20px" }}>
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
