import "./globals.css";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"]
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "Moon River | Signature Villa Resort",
  description:
    "Moon River je exkluzivni prezentace dlouhodobeho pronajmu u Frymburku s videem, galerii, investicnimi informacemi a kontaktnim formularem."
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body className={`${serif.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
