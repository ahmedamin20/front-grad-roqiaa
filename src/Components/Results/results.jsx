import React from "react";
import { useResult } from "../hooks/useFirestore.js";
import './results.css'
export default function Results({gloveId}) {
  const results = useResult()
  return (
    <>
<div className="result">
        {results ? results.map((item, index) => (
          <div className="card" key={index}>
            {Object.keys(item.result).map((key, innerIndex) => (
              <h3 key={innerIndex}>{`${key}: ${item.result[key]}`}</h3>
            ))}
          </div>
        ))
      :<p>no results available</p>
      }
      </div>


    </>
  );
}
