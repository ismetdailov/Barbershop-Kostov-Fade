export const reportConversion = (url) => {
  const callback = () => {
    if (url) {
      window.location.href = url;
    }
  };

  if (typeof window !== 'undefined') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-16800817322/pAXnCPfa5-EaEKrBoMs-',
      value: 1.0,
      currency: 'BGN',
      event_callback: callback,
    });
  }
};
