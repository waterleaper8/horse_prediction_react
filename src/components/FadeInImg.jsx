import { useState, useRef, useEffect } from 'react';

export const FadeInSection = (props) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entiries => {
      entiries.forEach(entry => {
        setVisible(entry.isIntersecting);
      });
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
