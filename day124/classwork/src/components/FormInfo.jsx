import { useState, useEffect } from "react";

function FormInfo() {
    const [username, setUsername] = useState("")

    useEffect (() => {
        alert(username);
    })

    return (
        <form>
            <input type="text" 
            value={username} 
            onChange={(i) => setUsername(i.target.value)}/>
        </form>
    )
}

export default FormInfo
