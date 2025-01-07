const LocationMap = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.0652766543385!2d-68.0047373!3d10.2080556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e805d7d2c5fb92f%3A0x8e805d7d2c5fb92f!2sNaguanagua%2C%20Carabobo!5e0!3m2!1ses!2sve!4v1710371559273!5m2!1ses!2sve"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationMap;