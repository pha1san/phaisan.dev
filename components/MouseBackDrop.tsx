"use client";

import { useEffect, useState } from "react";

// const kinet = new Kinet({
//   acceleration: 0.06,
//   friction: 0.2,
//   names: ["x", "y"],
// });

const MouseBackDrop = () => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  useEffect(() => {
    document.addEventListener("mousemove", function (event) {
      setX(event.pageX);
      setY(event.pageY - 60);
    });

    // return () => {
    //   second;
    // };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 h-full transition duration-300 lg:absolute"
      style={{ background: `radial-gradient(700px at ${X}px ${Y}px, rgb(13 202 240 / 10%), transparent 90%)` }}
    />
  );
};

export default MouseBackDrop;
