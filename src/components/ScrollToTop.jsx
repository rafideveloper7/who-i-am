import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (like #contact), let the browser handle it
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Wait a bit for the page to load, then scroll to hash
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    
    // Otherwise, scroll to top for all page navigations
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'auto' or 'instant'
    });
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;