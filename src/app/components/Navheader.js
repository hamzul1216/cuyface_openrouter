function Navheader() {
  return (
    <header className="text-center">
      <h1
        className="text-4xl font-extrabold bg-gradient-to-r from-purple-300
       via-sky-300 to-pink-400 text-transparent bg-clip-text shadow-lg inline-block"
        style={{ filter: "drop-shadow(0 0 15px rgba(200, 100, 255, 0.75))" }}
      >
        CUYFACE | PREDICT YOUR FACE
      </h1>
      <p className="text-gray-300">Ramal berdasarkan foto selfie kalian</p>
    </header>
  );
}

export default Navheader;
