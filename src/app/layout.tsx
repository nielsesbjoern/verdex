import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import { AmicusAuditProvider } from "@/lib/AmicusAuditContext";
import { AMICUS_VISIBLE } from "@/lib/features";
import { LanguageProvider } from "@/lib/LanguageProvider";
import { ThemeProvider, themeNoFlashScript } from "@/lib/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
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
  // Only used in the /referenzen showcase, not above the fold on the
  // home page — skip preloading so it doesn't compete for bandwidth
  // during the initial paint / LCP.
  preload: false,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://verdex.de";

const siteTitle = AMICUS_VISIBLE
  ? "Verdex — AI & Websites for Law Firms"
  : "Verdex — Websites & Digital Positioning for Law Firms";

const siteDescription = AMICUS_VISIBLE
  ? "Verdex builds modern websites and private, GDPR-compliant AI tools for German law firms. Local, secure, and tailored to legal practice."
  : "Verdex builds modern websites and digital positioning for German law firms — fast, GDPR-compliant, and tailored to legal practice.";

const siteKeywords = AMICUS_VISIBLE
  ? [
      "legal tech",
      "AI for law firms",
      "Kanzlei KI",
      "law firm website",
      "private legal AI",
      "GDPR legal AI",
    ]
  : [
      "legal tech",
      "law firm website",
      "local SEO law firms",
      "Kanzlei Website",
      "digital positioning law firms",
      "GDPR law firm website",
    ];

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Verdex",
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  applicationName: "Verdex",
  keywords: siteKeywords,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: siteUrl,
    siteName: "Verdex",
    locale: "de_DE",
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
    title: siteTitle,
    description: siteDescription,
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeNoFlashScript }} />
      </head>
      <body className="font-sans text-[17px] sm:text-lg leading-relaxed antialiased bg-white text-neutral-900 caret-forest-deep transition-colors duration-500 ease-editorial dark:bg-ink dark:text-neutral-100">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>
          <LanguageProvider>
            <AmicusAuditProvider>
              <ScrollProgress />
              <Navbar />
              <main id="main-content">{children}</main>
              <Footer />
            </AmicusAuditProvider>
          </LanguageProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Verdex",
              url: siteUrl,
              logo: `${siteUrl}/icon.png`,
              description: siteDescription,
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
