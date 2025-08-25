import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import localFont from "next/font/local";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "../components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chanaka Fernando - Portfolio",
  description: "AMBASSADOR OF TASTE FOR THE GLOBAL GASTRONOMY - Chanaka Fernando - Portfolio",
  keywords: [
    "Chanaka Fernando",
    "Chanaka Fernando Portfolio",
    "VISIONARY CHEF",
    "AMBASSADOR",
    "MOTIVATOR",
    "CONSULTANT",
    "MENTOR",
    "UK Entrepreneur",
    "THE GLOBAL GASTRONOMY",
    "Excecutive Chef",
    "Chef",
    "Businessman",
  ],
  openGraph: {
        images: "/chanaka-fernando1.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        <NextTopLoader
          color="#ffd900ff"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={5600}
          showAtBottom={false}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <div className="flex-grow ">
              {/* <Navbar /> */}
              <Header />
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
