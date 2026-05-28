import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageProvider";
import { AmicusAuditProvider } from "@/lib/AmicusAuditContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Verdex — AI & Websites for Law Firms",
  description:
    "Verdex builds modern websites and private, GDPR-compliant AI tools for German law firms. Local, secure, and tailored to legal practice.",
  metadataBase: new URL("https://verdex.example"),
  openGraph: {
    title: "Verdex — AI & Websites for Law Firms",
    description:
      "Modern websites and a private, on-premise AI assistant built for law firms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body className="font-sans text-[17px] sm:text-lg leading-relaxed antialiased bg-white text-neutral-900 caret-forest-deep">
        <LanguageProvider>
          <AmicusAuditProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </AmicusAuditProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
