import React from 'react';
import { Icons } from './Icons';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <div className="container flex border-b-slate-100 border-b">
      <nav className="flex container items-center justify-between p-2 text-white">
        <Link href="/">
          <Icons.logo className="size-10" />
        </Link>
        <Link href="/">
          <h1 className="font-bold ml-2 text-xl">
            <span className="text-primary">TICKET</span>
            <span className="text-secondary">MANGO</span>
          </h1>
        </Link>
        <div className="flex ml-auto">
          <Link href="/login" className={cn(buttonVariants({ variant: 'link' }), 'text-white')}>
            Log In
          </Link>
          <Link href="/register" className={buttonVariants({ variant: 'link' })}>
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
