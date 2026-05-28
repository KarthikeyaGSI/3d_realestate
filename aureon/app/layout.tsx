import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans-next",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-editorial-next",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AUREON — Private Architectural Worlds",
  description:
    "AUREON designs impossible villas, towers, and private worlds for those who have seen everything and still expect to be moved. Luxury is not decoration — it is precision made emotional.",
  keywords: [
    "luxury architecture",
    "private villas",
    "luxury towers",
    "bespoke estates",
    "architectural design",
    "AUREON",
    "luxury real estate",
    "private worlds",
  ],
  authors: [{ name: "AUREON" }],
  openGraph: {
    title: "AUREON — Private Architectural Worlds",
    description:
      "Some structures are built. Others are summoned. AUREON shapes impossible private worlds suspended beyond expectation.",
    type: "website",
    locale: "en_US",
    siteName: "AUREON",
  },
  twitter: {
    card: "summary_large_image",
    title: "AUREON — Private Architectural Worlds",
    description:
      "Some structures are built. Others are summoned. Luxury is precision made emotional.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

