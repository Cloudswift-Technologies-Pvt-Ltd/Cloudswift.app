import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import AIAssistant from "@/components/AIAssistant";
import { company } from "@/lib/data";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} — Azure Expert MSP | Cloud, M365 & AI`,
    template: `%s — ${company.name}`,
  },
  description: company.description,
  keywords: [
    "CloudSwift",
    "Azure Expert MSP",
    "Cloud Migration",
    "Microsoft 365",
    "Dynamics 365",
    "AI Services",
    "Bengaluru",
  ],
  icons: { icon: company.icon },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={manrope.variable}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className={manrope.className} suppressHydrationWarning>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <AIAssistant />
      </body>
    </html>
  );
}
