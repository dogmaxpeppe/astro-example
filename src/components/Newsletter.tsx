import { useState } from "react";

export default function Newsletter() {
    const [count, setCount] = useState(0);

    return <div>
        I'm a newsletter!
        <br/>
        <button onClick={() => setCount(s => s + 1)}>
            CLICK COUNT = {count}
        </button>
    </div>
}
