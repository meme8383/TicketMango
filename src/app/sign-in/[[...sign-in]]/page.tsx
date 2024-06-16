import React from 'react';
import { SignIn } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const Page = () => {
  return (
    <div className="h-full w-full flex flex-grow justify-center items-center">
      <SignIn
        path="/sign-in"
        appearance={{
          baseTheme: dark,
        }}
      />
    </div>
  );
};

export default Page;
