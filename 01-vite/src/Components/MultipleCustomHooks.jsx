import { useFetch } from './useFetch';
import { useCounter } from './useCounter';

const MultipleCustomHooks = () => {
    const { count, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://breakingbadapi.com/api/quotes/${count}`); return (
        <div>
            <button onClick={increment}>Incrementar contador</button>
            {isLoading ? (
                <p>Cargando...</p>
            ) : hasError ? (
                <p>Error: {hasError}</p>
            ) : data && data.length > 0 ? (
                <blockquote>
                    <p>{data[0].quote}</p>
                    <footer>{data[0].author}</footer>
                </blockquote>
            ) : (
                <p>No hay datos disponibles</p>
            )}
        </div>
    );
};

export default MultipleCustomHooks;