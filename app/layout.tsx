import type { Metadata } from "next";
import { Delius, Inter } from "next/font/google";
import "./globals.css";

const delius = Delius({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-delius",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Widya Rahma Wulandari - Administrative & Communication Professional",
  description:
    "Portfolio of Widya Rahma Wulandari - Administrative and Communication professional specializing in document management, event coordination, petty cash systems, and creative content creation.",
  keywords: [
    "administrative professional",
    "secretary",
    "event coordination",
    "content creation",
    "document management",
    "communication specialist",
  ],
  authors: [{ name: "Widya Rahma Wulandari" }],
  openGraph: {
    title:
      "Widya Rahma Wulandari - Administrative & Communication Professional",
    description:
      "Blending Administrative Precision with Creative Communication",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${delius.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
