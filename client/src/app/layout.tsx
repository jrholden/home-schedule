import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Home Schedule',
  description: 'Manage your home schedule efficiently',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="core-content grid grid-rows-[auto_1fr_auto] min-h-screen">
          <Header />
          <main className="main flex flex-col gap-8 items-center sm:items-start p-8 sm:p-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}