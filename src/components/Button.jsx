import { useState } from "react";

export default function Button() {
    const [didClick, setDidClick] = useState(false);
    const [counter, setCounter] = useState(0);

    return (
        <button onClick={(event) => setCounter(counter + 1)}>
            Click Me! {counter}
        </button>
    );
}