import { Lato, Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata = {
  title: "QPT",
  description: "QPT Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${lato.variable}`}>
      <body className="min-h-full flex flex-col bg-[#ffffff] text-[#1a1a1a] dark:bg-[#0a0e1a] dark:text-[#e2e8f0]">
        {children}

        {/* <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
      `}
        </Script> */}
      </body>
    </html>
  );
}
