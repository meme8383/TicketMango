import React from 'react';
import { SignUp } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const Page = () => {
  return (
    <div className="h-full w-full flex flex-grow justify-center items-center">
      <SignUp
        path="/sign-up"
        appearance={{
          baseTheme: dark,
        }}
      />
    </div>
  );
};

export default Page;
