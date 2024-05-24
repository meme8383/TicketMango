'use client';

import React, { useEffect, useState } from 'react';

interface Circle {
  id: number;
  x: number;
  y: number;
  color: string;
  direction: number;
}

const Background = () => {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    setCircles([
      { id: 1, x: 300, y: -800, color: '#FF7F2A', direction: Math.PI / 4 },
      { id: 2, x: -800, y: 300, color: '#55D400', direction: -Math.PI / 6 },
    ]);

    const interval = setInterval(() => {
      setCircles((circles) => {
        circles = circles.map((circle) => {
          const x = circle.x + Math.cos(circle.direction);
          const y = circle.y + Math.sin(circle.direction);
          return { ...circle, x, y };
        });

        for (const circle of circles) {
          if (
            circle.x > window.innerWidth ||
            circle.y > window.innerHeight ||
            circle.x < -800 ||
            circle.y < -800
          ) {
            const edge = Math.random() * 4;
            circles = [
              ...circles.filter((c) => c.id !== circle.id),
              {
                id: circles[circles.length - 1].id + 1,
                x:
                  edge === 0
                    ? -800
                    : edge === 2
                    ? window.innerWidth + 1600
                    : Math.random() * window.innerWidth,
                y:
                  edge === 1
                    ? -800
                    : edge === 3
                    ? window.innerHeight + 1600
                    : Math.random() * window.innerHeight,
                color: circle.color,
                direction: Math.random() * (Math.PI / 2) - Math.PI / 4 + edge * (Math.PI / 2),
              },
            ];
          }
          console.log(circle.x, circle.y);
        }

        return circles;
      });
      console.log(circles);

      for (const circle of circles) {
        if (
          circle.x > window.innerWidth / 2 ||
          circle.y > window.innerHeight / 2 ||
          circle.x < 0 ||
          circle.y < 0
        ) {
          setCircles((circles) => [
            ...circles,
            {
              id: circles.length + 1,
              x: circle.x,
              y: circle.y,
              color: circle.color,
              direction: Math.random() * Math.PI * 2,
            },
          ]);
          console.log(circles.length);
        }
        console.log(circle.x, circle.y);
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full fixed">
      {circles.map((circle) => (
        <div
          key={circle.id}
          style={{
            position: 'absolute',
            top: circle.y,
            left: circle.x,
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            backgroundColor: circle.color,
            filter: 'blur(150px)',
            opacity: '0.8',
          }}
        />
      ))}
    </div>
  );
};

export default Background;
