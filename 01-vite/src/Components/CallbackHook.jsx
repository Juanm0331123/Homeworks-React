import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
        (c) => {
            console.log('Calling setcounter', c);
            setCounter((value) => value + c)
        },
        [],
    )

    return (
        <>
            <div>CallBackHook {counter}</div>

            <ShowIncrement incrementFather={incrementFather} />
        </>
    )
};