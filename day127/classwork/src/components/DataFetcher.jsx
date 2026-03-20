import { useEffect } from "react";

function DataFetcher() {
    async function fetchData(apiLink) {
        const response = await fetch(apiLink)
        const data = await response.json()
        console.log(data)
    }

    useEffect(() => {
        fetchData("https://jsonplaceholder.typicode.com/posts")
    }, [])

    return <h2>check console</h2>
}

export default DataFetcher
