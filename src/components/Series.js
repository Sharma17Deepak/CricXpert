import React, { useEffect, useState } from "react";

const Series = () => {
  const [matchdata, setMatchdata] = useState([]);
  const [inputData, setInputData] = useState();
  const [search, setSearch] = useState("");
  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.cricapi.com/v1/series?apikey=c4cb7d0b-c4b1-47fa-9ed8-2cee2b1ccd81&offset=0"
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
        <p>Series Details</p>
      </div>
      <div className="search-bar search-bar2">
        <input
          type="text"
          placeholder="Search Series"
          onChange={handleInput}
        />
        <button
          onClick={handleBtn}
        >Search</button>
      </div>
      <div className="container">
        {matchdata ? (
          matchdata.map((curVal) => {
            const formatDate = (dateString) => {
              const date = new Date(dateString);
              return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
            };
            if (curVal.name.toLowerCase().includes(search.toLowerCase()) || search === "") 
            {
              return (
                <div className="card" key={curVal.name}>
                  <h3>Series Name :{curVal.name}</h3>
                  <div className="series">
                    <h4>From :{formatDate(curVal.startDate)}</h4>
                    <h4>To :{formatDate(curVal.endDate)}</h4>
                    <h4>Odi:{curVal.odi}  T20:{curVal.t20} Test:{curVal.test}</h4>
                    <h4>No.of matches: {curVal.matches}</h4>
                  </div>
                </div>
              );
            }
            return null;
          })
        ) : (
          <p className="err">Data Not Found ! Please Try Again After Some Time </p>
        )}
      </div>
    </>
  )
}

export default Series