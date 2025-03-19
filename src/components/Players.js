import React, { useEffect, useState } from "react";

const Players = () => {
  const [matchdata, setMatchdata] = useState([]);
  const [inputData, setInputData] = useState();
  const [search, setSearch] = useState("");
  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.cricapi.com/v1/players?apikey=c4cb7d0b-c4b1-47fa-9ed8-2cee2b1ccd81&offset=0"
      );
      const api_data = await response.json();
      setMatchdata(api_data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setInputData(e.target.value);
  };
  const handleBtn = () => {
    setSearch(inputData);
    getData();
  };
  return (
    <>
      <div className="heading">
        <p>Player Details</p>
      </div>
      <div className="search-bar search-bar2">
        <input
          type="text"
          placeholder="Search Players"
          onChange={handleInput}
        />
        <button
          onClick={handleBtn}
        >Search</button>
      </div>
      <div className="container">
        {matchdata ? (
          matchdata.map((curVal) => {
            if (
              curVal.name.toLowerCase().includes(search.toLowerCase()) ||
              curVal.country.toLowerCase().includes(search.toLowerCase()) ||
              search === ""
            ) {
              return (
                <div className="card" key={curVal.name}>
                  <h3>Player Name : {curVal.name}</h3>
                  <h3>Country : {curVal.country}</h3>
                </div>
              );
            }
            return null;
          })
        ) : (
          <p className="err">Data Not Found ! Please Try Again After Some Time</p>
        )}
      </div>

    </>
  )
}

export default Players;