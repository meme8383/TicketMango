import React from 'react';
import { Icons } from './Icons';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <div className="container flex border-b-slate-100 border-b">
      <nav className="flex container items-center justify-between p-2 text-white">
        <Link href="/">
          <Icons.logo className="size-10" />
        </Link>
        <Link href="/">
          <h1 className="font-bold ml-2 text-3xl">
            <span className="text-secondary">TICKET</span>
            <span className="text-primary">MANGO</span>
          </h1>
        </Link>
        <div className="flex ml-auto">
          <Link href="/sign-in" className={cn(buttonVariants({ variant: 'link' }), 'text-white')}>
            Sign In
          </Link>
          <Link href="/sign-up" className={buttonVariants({ variant: 'link' })}>
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
