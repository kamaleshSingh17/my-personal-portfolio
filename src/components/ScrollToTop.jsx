import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      setVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisible, { passive: true });
    toggleVisible();
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top-btn ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Scroll back to top"
    >
      <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
    </button>
  );
}
