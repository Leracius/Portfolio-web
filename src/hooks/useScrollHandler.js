import { useState, useEffect } from "react";

const useScrollHandler = (threshold) => {
  const [scroll, setScroll] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY);
    setVisible(window.scrollY > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return { scroll, visible };
};

export default useScrollHandler;
