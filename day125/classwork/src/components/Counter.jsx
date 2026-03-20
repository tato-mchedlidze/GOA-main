import { useState, useEffect } from "react";

// cw1
// function Counter () {
//     const[count, setCount] = useState(0)

//     useEffect( () => { 
//         const handleKeyDown = () => {
//             setCount ((i) => i + 1)
//         }

//         document.addEventListener("keydown", handleKeyDown)

//         return () => {
//             document.removeEventListener("keydown", handleKeyDown)
//         }
//     })

//     return (
//         <div>
//             <p>{count}</p>
//         </div>
//     )
// }


// cw2
function Counter () {
    const[count, setCount] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((i) => i = 1)
        }, 500)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div>
            <p>{count}</p>
        </div>
    )
}

export default Counter
