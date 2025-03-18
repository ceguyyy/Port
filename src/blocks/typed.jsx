import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function TypedText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Ios Developer",
        "Product Manager",
        "FrontEnd Developer"
      ],
      typeSpeed: 50,
      backSpeed: 30,  // Speed for deleting the text
      backDelay: 1000, // Pause before deleting
      loop: true,  // Enables continuous looping
      showCursor: true, // Shows blinking cursor
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
}

export default TypedText;
