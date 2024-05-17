import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className="h-full">
      <body className={cn('relative h-full font-sans anatialiased dark', inter.className)}>
        <main className="relative flex flex-col min-h-screen">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
