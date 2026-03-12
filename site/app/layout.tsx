import type { Metadata } from 'next';
import { Geist, Geist_Mono, Roboto, Arbutus, Ultra } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/Footer';
import ThemeWrapper from '@/components/layout/ThemeWrapper';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400'],
});

const arbutus = Arbutus({
  variable: '--font-arbutus',
  subsets: ['latin'],
  weight: ['400'],
});

const ultra = Ultra({
  variable: '--font-ultra',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Aiden Nelson',
  description: `Aiden Nelson's Professional Webpage`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  'use client';

  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${roboto.variable}
          ${arbutus.variable}
          ${ultra.variable}

          antialiased
        `}
      >
        <ThemeWrapper>
          {/* Added flex flex-col min-h-screen */}
          <div className="page-main pt-20 flex flex-col min-h-screen">
            <Navbar />
            {/* Added flex-grow to push footer down */}
            <main className="mx-8 sm:mx-20 md:mx-22 lg:mx-24 flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeWrapper>
      </body>
    </html>
  );
}
