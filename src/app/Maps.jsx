import "./Maps.css";

export default function GoogleMap() {
  return (
    <div className="google-map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151533.93800750872!2d24.313814215849817!3d42.22392171320754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd13a6852c75d%3A0x1080430e5752433c!2sBARBERSHOP%20-%20KOSTOV%20FADE!5e0!3m2!1sbg!2sbg!4v1746859941426!5m2!1sbg!2sbg" width="600" height="450" style="border:0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
