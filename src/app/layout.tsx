import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body className={cn('relative h-full font-sans anatialiased dark', inter.className)}>
          <main className="relative flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow flex-1 flex flex-col">{children}</div>
          </main>
          <Background />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default Layout;
