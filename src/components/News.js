import React, { useEffect, useState } from "react";

const News = () => {
  const [newsdata, setNewsdata] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines/sources?category=sports&apiKey=5b6bc34ef1184e4eb063e6da74320ac3"
      );
      const api_data = await response.json();
      setNewsdata(api_data.sources);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="heading">
        <p>Latest Sports News</p>
      </div>
      <div className="container">
        {newsdata ? (
          newsdata.map((curVal) => {
            return (
              <div className="newscard" key={curVal.id}>
                <h2>{curVal.name}</h2>
                <p>{curVal.description}</p>
                <a href={curVal.url} className="newslink" target="_blank"
                rel="noopener noreferrer" >Read More</a>
              </div>
            );
          })
        ) : (
          <p className="err">Data Not Found ! Please Try Again After Some Time </p>
        )}
      </div>
    </>
  )
}

export default News