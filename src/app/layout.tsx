import { Metadata } from "next";
import "./styles.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Barlow } from "next/font/google";
import { Provider } from "@/utils/providers";

export const metadata: Metadata = {
  title: "Bamidele Ayomide Precious - Backend Engineer",
  description:
    "Backend Engineer with 4+ years building production APIs in TypeScript and NestJS, on MongoDB, PostgreSQL and Redis, deployed to AWS with Docker, Fargate and Terraform. AWS Certified Cloud Practitioner.",
  keywords:
    "Bamidele Ayomide Precious, Backend Engineer, NestJS Developer, Node.js Developer, TypeScript, AWS Certified Cloud Practitioner, WebRTC, Terraform, Software Engineer Nigeria",
  authors: [{ name: "Bamidele Ayomide Precious" }],
  creator: "Bamidele Ayomide Precious",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Bamidele Ayomide Precious - Backend Engineer",
    description:
      "Backend Engineer with 4+ years building production APIs with TypeScript, NestJS, MongoDB, PostgreSQL, Redis and AWS.",
    siteName: "Bamidele Ayomide Precious",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bamidele Ayomide Precious - Backend Engineer",
    description:
      "Backend Engineer | NestJS | TypeScript | AWS | WebRTC",
    creator: "@prec__hy",
  },
};

const barlow = Barlow({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="custom-scrollbar">
      <head>
        <meta name="next-size-adjust" content="" />
        <meta
          name="google-site-verification"
          content="iAg3Wn_WXEuHyzs8riE6RlncEF3mYCwj2SrVNVWl3kU"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="shortcut icon" href="/image/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/image/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/image/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/image/favicon-16x16.png"
        />
        <link rel="manifest" href="/image/site.webmanifest" />
      </head>
      <body
        className={`${barlow.className} bg-white text-slate-900 custom-scrollbar`}
      >
        <Provider>
          <Header />
          <main
            style={{ width: "100%", minHeight: "100vh", padding: "20px" }}
            className="page-transition"
          >
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
