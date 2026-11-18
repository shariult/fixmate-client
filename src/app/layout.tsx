import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import ToasterProvider from "@/components/ui/common/ToastProvider";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FixMate | Hire Verified & Skilled Technicians",
  description:
    "Verified Technicians list the repair services they offer (smartphone screen replacement, laptop servicing, AC servicing, refrigerator, TV, washing machine, electrical wiring, etc.)",
};

function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        {children}
        <ToasterProvider />
      </body>
    </html>
  );
}
export default RootLayout;
