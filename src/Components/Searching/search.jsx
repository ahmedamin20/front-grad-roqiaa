// src/Search.js
import React, { useState } from "react";
import axios from "axios";
import "./search.css";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch() {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("http://localhost:3000/api/Search", {
        searchValue: searchValue,
      });
      console.log(response.data);
      setLocation(response?.data.data);
          } catch (error) {
      console.log(error);
      setError("Error fetching location. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="base">
        <div className="content">
          <div className="upper">
            <p>Ask for what you've lost</p>
          </div>
          <div className="response">
            <div className="leftside">
              <h6>
                <i className="fa-solid fa-robot"></i>We are here to assist you
                ...
              </h6>
            </div>

            {searchValue && <h6 className="search-value">{searchValue}</h6>}

            {location && (
              <p className="location">
                {" "}
                <i className="fa-solid fa-robot">
                </i>
                  <a href={location} style={{color: "blue"}} target="_blank">
                  {location.slice(0,28)}
                  </a>
              </p>
            )}
            <div className="error-message">
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </div>
          <div className="search">
            <input
              className="down"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Enter search value"
            />
            <button
              type="button"
              className="btn btn-primary butt"
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
}
