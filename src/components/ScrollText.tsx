import React from 'react';

interface ScrollTextProps {
  text: string[];
}

const ScrollText: React.FC<ScrollTextProps> = ({ text }) => {
  // TODO: Animate scroll

  return (
    <div className="flex flex-col items-end">
      <p className="text-5xl font-semibold text-right bg-gradient-to-t from-primary to-transparent bg-clip-text text-transparent text-glow-md">
        {text[0]}
      </p>
      <p className="text-6xl font-bold text-primary my-2 text-right text-glow-lg">{text[1]}</p>
      <p className="text-5xl font-semibold text-right bg-gradient-to-b from-primary to-transparent bg-clip-text text-transparent text-glow-md">
        {text[2]}
      </p>
    </div>
  );
};

export default ScrollText;
