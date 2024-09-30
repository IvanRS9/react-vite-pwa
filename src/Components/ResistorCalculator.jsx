import { useState } from 'react';

const bandColors = [
    { color: 'black', value: 0, text: 'Negro', hex: '#000' },
    { color: 'brown', value: 1, text: 'Café', hex: '#ec8f41' },
    { color: 'red', value: 2, text: 'Rojo', hex: '#DE3636FF' },
    { color: 'orange', value: 3, text: 'Naranja', hex: '#fe4d00' },
    { color: 'yellow', value: 4, text: 'Amarillo', hex: '#e5e24a' },
    { color: 'green', value: 5, text: 'Verde', hex: '#4ad739' },
    { color: 'blue', value: 6, text: 'Azul', hex: '#2b8fe7' },
    { color: 'violet', value: 7, text: 'Violeta', hex: '#9d60d2' },
    { color: 'gray', value: 8, text: 'Gris', hex: '#ADADAD' },
    { color: 'white', value: 9, text: 'Blanco', hex: '#FFF' },
];

const multipliers = [
    { color: 'black', value: 1, text: 'Negro', hex: '#000' },
    { color: 'brown', value: 10, text: 'Café', hex: '#ec8f41' },
    { color: 'red', value: 100, text: 'Rojo', hex: '#DE3636FF' },
    { color: 'orange', value: 1000, text: 'Naranja', hex: '#fe4d00' },
    { color: 'yellow', value: 10000, text: 'Amarillo', hex: '#e5e24a' },
    { color: 'green', value: 100000, text: 'Verde', hex: '#4ad739' },
    { color: 'blue', value: 1000000, text: 'Azul', hex: '#2b8fe7' },
    { color: 'gold', value: 0.1, text: 'Dorado', hex: '#FFD700' },
    { color: 'silver', value: 0.01, text: 'Plata', hex: '#C0C0C0' },
];

const toleranceValues = [
    { color: 'brown', value: 1, text: 'Café', hex: '#ec8f41' },
    { color: 'red', value: 2, text: 'Rojo', hex: '#DE3636FF' },
    { color: 'green', value: 0.5, text: 'Verde', hex: '#4ad739' },
    { color: 'blue', value: 0.25, text: 'Azul', hex: '#2b8fe7' },
    { color: 'violet', value: 0.1, text: 'Violeta', hex: '#9d60d2' },
    { color: 'gray', value: 0.05, text: 'Gris', hex: '#ADADAD' },
    { color: 'gold', value: 5, text: 'Dorado', hex: '#FFD700' },
    { color: 'silver', value: 10, text: 'Plata', hex: '#C0C0C0' },
];

const ResistorCalculator = () => {
    const [band1, setBand1] = useState(0);
    const [band2, setBand2] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [tolerance, setTolerance] = useState(1);

    const calculateResistance = () => {
        const resistanceValue = ((band1 * 10) + band2) * multiplier;
        return resistanceValue;
    };

    return (
        <div>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                    <label className="block text-white">Banda 1</label>
                    <select
                        className="w-full border border-gray-300 rounded p-2"
                        onChange={(e) => setBand1(parseInt(e.target.value))}
                    >
                        {bandColors.map((band, index) => (
                            <option style={{background:`${band.hex}`}} key={index} value={band.value}>{band.text}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-white">Banda 2</label>
                    <select
                        className="w-full border border-gray-300 rounded p-2"
                        onChange={(e) => setBand2(parseInt(e.target.value))}
                    >
                        {bandColors.map((band, index) => (
                            <option style={{background:`${band.hex}`}} key={index} value={band.value}>{band.text}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-white">Multiplicador</label>
                    <select
                        className="w-full border border-gray-300 rounded p-2"
                        onChange={(e) => setMultiplier(parseFloat(e.target.value))}
                    >
                        {multipliers.map((band, index) => (
                            <option style={{background:`${band.hex}`}} key={index} value={band.value}>{band.text}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-white">Tolerancia</label>
                    <select
                        className="w-full border border-gray-300 rounded p-2"
                        onChange={(e) => setTolerance(parseFloat(e.target.value))}
                    >
                        {toleranceValues.map((band, index) => (
                            <option style={{background:`${band.hex}`}} key={index} value={band.value}>{band.text}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="text-center">
                <p className="text-xl font-bold">
                    Valor de resistencia: {calculateResistance()} Ω ± {tolerance}%
                </p>
            </div>
        </div>
    );
};

export default ResistorCalculator;
