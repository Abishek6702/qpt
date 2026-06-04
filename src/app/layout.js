import { Lato, Roboto } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "QPT",
  description: "QPT Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${roboto.variable}`}
    >
      <body className="min-h-full flex flex-col bg-[#ffffff] text-[#1a1a1a] dark:bg-[#0a0e1a] dark:text-[#e2e8f0]">
        {children}
      </body>
    </html>
  );
}
