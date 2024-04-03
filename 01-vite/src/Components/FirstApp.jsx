import './FirstApp.css'
import PropTypes from 'prop-types'
import { useState } from 'react';

function FirstApp({ value }) {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        console.log('Calling handleAdd');
        setCounter(counter + 1);
    }

    const handleSubstract = () => {
        console.log('Calling handleSubstract');
        setCounter(counter - 1);
    }

    const handleReset = () => {
        console.log('Calling handleReset');
        setCounter(value);
    }

    return (
        <>
            <div className="container">
                <h1> Counter </h1>
                <span>{counter}</span>
                <div className="buttons">
                    <button onClick={() => handleAdd()}> +1 </button>
                    <button onClick={() => handleSubstract()}> -1 </button>
                    <button onClick={() => handleReset()}> Reset </button>
                </div>
            </div>
        </>
    )
}

FirstApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default FirstApp;