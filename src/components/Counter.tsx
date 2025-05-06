import React, { useState } from 'react';
import styles from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);

    return (
        <div className={styles.btn}>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;