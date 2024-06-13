import ScrollText from '@/components/ScrollText';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <>
      <div className="container justify-center max-w-6xl pb-52">
        <div className="md:grid md:grid-cols-2 mt-20 items-center">
          <div className="justify-center">
            <Image
              src="/iPhone 14 Pro Max.png"
              alt="iPhone 14 Pro Max"
              width={600}
              height={1000}
              className="mx-auto z-10"
            />
          </div>
          <div className="flex justify-left ml-3">
            <div>
              <div className="flex items-center mb-5">
                <ScrollText text={['Shuttle', 'Play', 'Tour Bus']} />
                <h1 className="text-6xl font-bold ml-4">Tickets</h1>
              </div>
              <p className="text-2xl font-semibold my-3">Create your event in minutes.</p>
              <p className="text-2xl font-semibold my-3">Reach thousands.</p>
              <p className="text-2xl my-3">
                Use our free, powerful event creation tool to create your event and begin sharing it
                immediately.
              </p>
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 mt-20 items-center">
          <div className="justify-center">
            <div className="bg-blue-950 w-[250px] h-[400px] mx-auto p-10">
              <h1 className="font-semibold text-7xl [writing-mode:vertical-rl] text-center mx-auto">
                ADMIT ONE
              </h1>
            </div>
          </div>
          <div className="flex justify-left ml-3">
            <div>
              <h1 className="text-6xl font-bold mb-6">Focused on Simplicity</h1>
              <p className="text-2xl font-semibold my-3">For customers.</p>
              <p className="text-2xl font-semibold my-3">For event organizers.</p>
              <p className="text-2xl font-semibold my-3">Everyone gets to skip the B.S.</p>
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 mt-20 items-center">
          <div className="flex justify-left mx-10">
            <div>
              <h1 className="text-6xl font-bold mb-6">Without Skimping on Cabability</h1>
              <p className="text-2xl font-semibold my-3">
                <span className="text-green-500">✓</span> Analytics Dashboard
              </p>
              <p className="text-2xl font-semibold my-3">
                <span className="text-green-500">✓</span> Powerful API
              </p>
              <p className="text-2xl font-semibold my-3">
                <span className="text-green-500">✓</span> Smart Wallet Integration
              </p>
              <p className="text-2xl font-semibold my-3">And always improving....</p>
            </div>
          </div>
          <div className="justify-center">
            <div className="bg-blue-950 w-full h-[400px] p-10 mx-5 rounded-3xl">Placeholder</div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-6xl font-bold">Explore our Plans</h1>
          <div className="md:grid md:grid-cols-3 mt-8 gap-2">
            <div className="bg-background rounded-3xl p-5 flex flex-col justify-between shadow-2xl">
              <div>
                <h2 className="text-5xl font-bold text-center mb-5">Free</h2>
                <p className="text-2xl font-semibold mb-5">
                  <span className="text-green-500">✓</span> 3 Simultaneous Events
                </p>
                <p className="text-2xl font-semibold mb-5">
                  <span className="text-green-500">✓</span> 100 Tickets per Event
                </p>
                <p className="text-2xl font-semibold mb-5">
                  <span className="text-green-500">✓</span> Smart Wallet Integration
                </p>
                <p className="text-2xl font-semibold mb-5">
                  <span className="text-green-500">✓</span> Basic Dashboard
                </p>
                <p className="text-2xl font-semibold mb-5">
                  <span className="text-red-500">✗</span> Purchases
                </p>
                <p className="text-2xl font-semibold">
                  <span className="text-red-500">✗</span> API
                </p>
              </div>
              <div className="flex justify-center mt-16">
                <Link
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'p-7 text-center text-3xl text-foreground w-2/3'
                  )}
                  href="/register"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="bg-background rounded-3xl p-5 flex flex-col justify-between shadow-2xl">
              <div>
                <h2 className="text-5xl font-bold text-center mb-5">Plus</h2>
                <p className="text-2xl font-semibold mb-5">
                  <span className="text-green-500">✓</span> 100 Simultaneous Events
                </p>
                <p className="text-2xl font-semibold mb-5">
                  <span className="text-green-500">✓</span> 10k Tickets per Event
                </p>
                <p className="text-2xl font-semibold mb-5">
                  <span className="text-green-500">✓</span> Smart Wallet Integration
                </p>
                <p className="text-2xl font-semibold mb-5">
                  <span className="text-green-500">✓</span> Analytics Dashboard
                </p>
                <p className="text-2xl font-semibold mb-5">
                  <span className="text-green-500">✓</span> Purchases (10% Fee)
                </p>
                <p className="text-2xl font-semibold">
                  <span className="text-green-500">✓</span> Basic API
                </p>
              </div>
              <div className="flex justify-center mt-16">
                <Link
                  className={cn(
                    buttonVariants({ variant: 'secondary' }),
                    'p-7 text-center text-3xl w-2/3'
                  )}
                  href="/register"
                >
                  $5/mo
                </Link>
              </div>
            </div>
            <div className="bg-background rounded-3xl p-5 flex flex-col justify-between shadow-2xl">
              <div>
                <h2 className="text-5xl font-bold text-center mb-5">Enterprise</h2>
                <p className="text-2xl font-semibold mb-5">
                  <span className="text-green-500">✓</span> Unlimited Events
                </p>
                <p className="text-2xl font-semibold mb-5">
                  <span className="text-green-500">✓</span> Unlimited Tickets
                </p>
                <p className="text-2xl font-semibold mb-5">
                  <span className="text-green-500">✓</span> Smart Wallet Integration
                </p>
                <p className="text-2xl font-semibold mb-5">
                  <span className="text-green-500">✓</span> Analytics Dashboard
                </p>
                <p className="text-2xl font-semibold mb-5">
                  <span className="text-green-500">✓</span> Purchases
                </p>
                <p className="text-2xl font-semibold mb-5">
                  <span className="text-green-500">✓</span> Custom pricing
                </p>
                <p className="text-2xl font-semibold mb-5">
                  <span className="text-green-500">✓</span> Advanced API
                </p>
                <p className="text-2xl font-semibold">
                  <span className="text-green-500">✓</span> 24/7 Customer Support
                </p>
              </div>
              <div className="flex justify-center mt-16">
                <Link
                  className={cn(
                    buttonVariants({ variant: 'outline' }),
                    'p-7 text-center text-3xl border-foreground w-2/3'
                  )}
                  href="/register"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[900px] bg-gradient-to-t from-primary to-background -z-50"></div>
    </>
  );
};

export default Page;
