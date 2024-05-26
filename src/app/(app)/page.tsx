import ScrollText from '@/components/ScrollText';
import React from 'react';

const Page = () => {
  return (
    <div className="container justify-center max-w-6xl">
      <div className="md:grid md:grid-cols-2 mt-20 items-center">
        <div className="justify-center">
          <div className="bg-yellow-400 w-[300px] h-[500px] mx-auto">
            Placeholder
            {/* TODO */}
          </div>
        </div>
        <div className="flex justify-center ml-3">
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
    </div>
  );
};

export default Page;
