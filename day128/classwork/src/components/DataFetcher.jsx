import { useEffect, useState } from "react";

function DataFetcher() {
  const [data, setData] = useState([]);

  async function getData(apiLink) {
    const response = await fetch(apiLink);
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    getData("https://jsonplaceholder.typicode.com/users");
    console.log(data);
  }, [data]);

  return <div>open csonsol ;D</div>;
}

export default DataFetcher;
