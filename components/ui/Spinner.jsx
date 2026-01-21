function Spinner({ label }) {
  return (
    <div>
      <div className="spinner"></div>
      <p className="text-center text-lg">{label}</p>
    </div>
  );
}

export default Spinner;
