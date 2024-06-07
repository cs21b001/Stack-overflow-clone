import React, { useEffect, useRef } from 'react';
import './HomeMainbar.css';

const AdComponent = () => {
  const adRef = useRef(null);

  useEffect(() => {
    // Function to initialize the ad
    const initializeAds = () => {
      if (adRef.current && !adRef.current.isInitialized) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          adRef.current.isInitialized = true; // Mark this ad as initialized
        } catch (e) {
          console.error("Ads initialization error:", e);
        }
      }
    };

    // Load the AdSense script if not already loaded
    const scriptId = 'adsbygoogle-js';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = initializeAds; // Initialize ads after script loads
      document.body.appendChild(script);
    } else {
      initializeAds(); // Script already loaded, just initialize ads
    }
  }, []);

  return (
    <div className="ad-component">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', textAlign: 'center', height:'80px' }}
        data-ad-client="ca-pub-1348443621832865"
        data-ad-slot="9940539704" // Your AdSense ad slot ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdComponent;
