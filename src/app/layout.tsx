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
  weight: ["400", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://verdex.de";

export const metadata: Metadata = {
  title: {
    default: "Verdex — AI & Websites for Law Firms",
    template: "%s | Verdex",
  },
  description:
    "Verdex builds modern websites and private, GDPR-compliant AI tools for German law firms. Local, secure, and tailored to legal practice.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  applicationName: "Verdex",
  keywords: [
    "legal tech",
    "AI for law firms",
    "Kanzlei KI",
    "law firm website",
    "private legal AI",
    "GDPR legal AI",
  ],
  openGraph: {
    title: "Verdex — AI & Websites for Law Firms",
    description:
      "Modern websites and a private, on-premise AI assistant built for law firms.",
    type: "website",
    url: siteUrl,
    siteName: "Verdex",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Verdex logo icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verdex — AI & Websites for Law Firms",
    description:
      "Modern websites and a private, on-premise AI assistant built for law firms.",
    images: ["/icon.png"],
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
      suppressHydrationWarning
    >
      <body className="font-sans text-[17px] sm:text-lg leading-relaxed antialiased bg-white text-neutral-900 caret-forest-deep">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <LanguageProvider>
          <AmicusAuditProvider>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </AmicusAuditProvider>
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Verdex",
              url: siteUrl,
              logo: `${siteUrl}/icon.png`,
              description:
                "Verdex builds modern websites and private, GDPR-compliant AI tools for law firms.",
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
