import React, { useEffect, useState } from "react";
import circle from "../assets/circle.png";

const Home = () => {
  const [matchdata, setMatchdata] = useState([]);
  const [inputData, setInputData] = useState();
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.cricapi.com/v1/cricScore?apikey=c4cb7d0b-c4b1-47fa-9ed8-2cee2b1ccd81"
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
        <img src={circle} alt="circle_image"/>
        <p>Live Cricket Score App</p>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Match, series"
          onChange={handleInput}
        />
        <button onClick={handleBtn}>Search</button>
      </div>
      <div className="container">
        {matchdata ? (
          matchdata.map((curVal) => {
            if (curVal.status !== "Match not started") {
              if (curVal.series.toLowerCase().includes(search.toLowerCase()) || curVal.t1.toLowerCase().includes(search.toLowerCase()) || curVal.t2.toLowerCase().includes(search.toLowerCase()) || search === "") {
                return (
                  <div className="card" key={curVal.id}>
                    <h3>Series Name : {curVal.series}</h3>
                    <h3>Format : {curVal.matchType}</h3>
                    <div className="img">
                      <div>
                        <img src={curVal.t1img} alt="team_image" />
                        <p>{curVal.t1}</p>
                        <p>{curVal.t1s}</p>
                      </div>
                      <div>
                        <img src={curVal.t2img} alt="team_image"/>
                        <p>{curVal.t2}</p>
                        <p>{curVal.t2s}</p>
                      </div>
                    </div>
                    <p className="status">Status : {curVal.status}</p>
                  </div>
                );
              }
            }
            return null;
          })
        ) : (
          <p className="err">Data Not Found ! Please Try Again After Some Time </p>
        )}
      </div>
    </>
  );
};

export default Home;
