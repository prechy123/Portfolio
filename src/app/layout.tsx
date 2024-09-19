import { Metadata } from "next";
import "./styles.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Barlow } from "next/font/google";
import { Provider } from "@/utils/providers";

export const metadata: Metadata = {
  title: "Bamidele - Home",
  description:
    "Hello, I am Bamidele Ayomide Precious a Full Stack developer, and visit to explore a range of real-world projects.",
  keywords:
    "Bamidele, Bamidele Ayomide, Bamidele Precious, Bamidele Ayomide Precious, Bamidele Ayomide Portfolio, Bamidele Precious Portfolio, Full Stack Portfolio,",
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
      <head>
        <meta name="next-size-adjust" content="" />
        <link rel="shortcut icon" href="/image/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/image/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon-16x16.png" />
        <link rel="manifest" href="/image/site.webmanifest" />
      </head>
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
