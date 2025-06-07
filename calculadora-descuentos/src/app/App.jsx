import { useState } from 'react';
import './App.css';

function App (){
    const [precio, setPrecio] = useState('');
    const [descuento, setDescuento] = useState('');
    const [resultado, setResultado] = useState('');
    const [modoOscuro, setModoOscuro] = useState(false);

    const calcularDescuento = () => {
        const precioNum = parseFloat(precio);
        const descuentoNum = parseFloat(descuento);

        if (isNaN(precioNum)|| isNaN(descuentoNum)) {
            setResultado('Por favor ingresa por número válidos');
            return;
        }

        const montoDescuento = precioNum * (descuentoNum / 100);
        const precioFinal = precioNum - montoDescuento;

        setResultado(`Precio original: $${precioNum.toFixed(2)}\nDescuento: ${descuentoNum}%\nMonto descontado: $${montoDescuento.toFixed(2)}\nPrecio final: $${precioFinal.toFixed(2)}`);

        const toggleModoOscuro = () => {
            setModoOscuro(!modoOscuro);
        };
        return (
            <div className={`app ${modoOscuro ? 'oscuro' : ''}`}>
              <h1>Calculadora de Descuentos</h1>
              <label>
                Precio:
                <input type="number" value={precio} onChange={e => setPrecio(e.target.value)} placeholder="Ej: 1000" />
              </label>
              <label>
                Descuento (%):
                <input type="number" value={descuento} onChange={e => setDescuento(e.target.value)} placeholder="Ej: 20" />
              </label>
              <button onClick={calcularDescuento}>Calcular</button>
              <pre className="resultado">{resultado}</pre>
              <button onClick={toggleModoOscuro}>
                {modoOscuro ? 'Modo Claro' : 'Modo Oscuro'}
              </button>
            </div>
          );
        
    }
}