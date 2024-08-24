import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    function getApiData() {
      fetch(
        "https://api.nasa.gov/planetary/apod?api_key=4wVCH5RSiHB0SOEPAlywj0Pbb7hyHS8E7WNO0ro3"
      )
        .then((response) => response.json())
        .then((data) => setApiData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }

    getApiData();
  }, []);

  if (!apiData) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container">
        <h1>{apiData.title}</h1>
        <img src={apiData.url} alt={apiData.title} />
        <p>{apiData.explanation}</p>
      </div>
    );
  }
}

export default App;
