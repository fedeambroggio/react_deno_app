import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

export default function Calculous() {
    const [input, setInput] = useState<string>("");
    const [colors, setColors] = useState([]);

    const onSubmit = (event: h.JSX.TargetedEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(input);
    };

    useEffect(() => {
        //Obtener el array de colores
        fetch("/api/getColors")
            .then((response) => response.json())
            .then((data) => setColors(data))
            .catch((error) => console.log(error));
    }, []);
    return (
        <div style={{backgroundColor: '#333'}}>
            <form onSubmit={onSubmit}>
                <label>Color:</label>
                <input
                    type="text"
                    value={input}
                    onInput={(e) => setInput(e.currentTarget.value)}
                    onChange={(e) => setInput(e.currentTarget.value)}
                />
                <button type="submit">Agregar</button>
            </form>
            <div>
                <h2>Lista de Colores</h2>
                <ul>
                    {colors.map((color, index) => (
                        <li key={index} style={{color: `${color}`}}>{color}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
