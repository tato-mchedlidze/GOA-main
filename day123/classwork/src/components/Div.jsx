// cw1
// import { useState } from "react";

// export default function Div() {
//   const [count, setCount] = useState(0);

//   return (
//     <div onClick={() => setCount(count + 1)}>
//       <p>{count}</p>
//     </div>
//   );
// }

// cw2
import { useState } from "react";
import Paragraph from "./Paragraph";

function Div() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <button onClick={() => setCount( count +1 )}>+1</button>

            <Paragraph count={count} />
        </div>
    )
}

export default Div
