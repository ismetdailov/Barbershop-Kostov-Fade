export const reportConversion = (url, target = "_blank") => {
  if (typeof window === "undefined") return;

  // Отваряме линка веднага (синхронно), за да не бъде блокиран от браузъра
  // и да работи дори когато gtag липсва (напр. AdBlock).
  if (url) {
    const win = window.open(url, target);
    if (win) win.opener = null;
    else window.location.href = url;
  }

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-16800817322/pAXnCPfa5-EaEKrBoMs-",
        value: 1.0,
        currency: "BGN",
        transport_type: "beacon",
      });
    }
  } catch (e) {
    // проследяването не трябва да чупи бутона
  }
};
