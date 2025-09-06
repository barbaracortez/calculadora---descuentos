import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [precio, setPrecio] = useState("");
  const [descuento, setDescuento] = useState("");
  const [resultado, setResultado] = useState("");
  const [modoOscuro, setModoOscuro] = useState(false);

  // 🔹 Cargar datos guardados
  useEffect(() => {
    const saved = localStorage.getItem("calculadora");
    if (saved) {
      const { precio, descuento, resultado } = JSON.parse(saved);
      setPrecio(precio);
      setDescuento(descuento);
      setResultado(resultado);
    }
  }, []);

  // 🔹 Guardar al cambiar valores
  useEffect(() => {
    if (precio && descuento && resultado) {
      localStorage.setItem(
        "calculadora",
        JSON.stringify({ precio, descuento, resultado })
      );
    }
  }, [precio, descuento, resultado]);

  const calcularDescuento = () => {
    const precioNum = parseFloat(precio);
    const descuentoNum = parseFloat(descuento);

    if (isNaN(precioNum) || isNaN(descuentoNum)) {
      setResultado("⚠️ Por favor ingresa números válidos");
      return;
    }

    if (precioNum <= 0) {
      setResultado("⚠️ El precio debe ser mayor a 0");
      return;
    }

    if (descuentoNum < 0 || descuentoNum > 100) {
      setResultado("⚠️ El descuento debe estar entre 0% y 100%");
      return;
    }

    const montoDescuento = precioNum * (descuentoNum / 100);
    const precioFinal = precioNum - montoDescuento;

    setResultado(
      `Precio original: $${precioNum.toFixed(2)}\n` +
        `Descuento: ${descuentoNum}%\n` +
        `Monto descontado: $${montoDescuento.toFixed(2)}\n` +
        `Precio final: 💸 $${precioFinal.toFixed(2)}`
    );
  };

  const toggleModoOscuro = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <div className={`app ${modoOscuro ? "oscuro" : ""}`}>
      <h1>💸 Calculadora de Descuentos</h1>

      <label>
        Precio:
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          placeholder="Ej: 1000"
        />
      </label>

      <label>
        Descuento (%):
        <input
          type="number"
          value={descuento}
          onChange={(e) => setDescuento(e.target.value)}
          placeholder="Ej: 20"
        />
      </label>

      <button onClick={calcularDescuento}>Calcular</button>
      <button onClick={toggleModoOscuro}>
        {modoOscuro ? "🌞 Modo Claro" : "🌙 Modo Oscuro"}
      </button>

      {resultado && (
        <pre className="resultado">
          {resultado.split("\n").map((linea, i) =>
            linea.includes("Precio final") ? (
              <div key={i}>
                <strong>{linea}</strong>
              </div>
            ) : (
              <div key={i}>{linea}</div>
            )
          )}
        </pre>
      )}
    </div>
  );
}

export default App;
