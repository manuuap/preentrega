import React, { useState } from 'react';

export const ItemCount = ({ stock,funcion }) => {
    const [count, setCount] = useState(1);

    const increment = (evt) => {
        evt.preventDefault();
        if (count < stock) {
            setCount(prevCount => prevCount + 1);
        }
    };
    const decrement = (evt) => {
        evt.preventDefault();
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    };



    return (
        <>
            <div>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={funcion}>Agregar al carrito</button>
        </>
    );
}

