import React, { useState } from "react";
import { categories, contries } from "../index/index";

const Query = ({setFromData}) => {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  

  return (
    <div className="query-box">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFromData({
            country,
            category,
            query
          })
        }}
      >
        <select name="" id="" onChange={(e) => setCountry(e.target.value)}>
          {contries.map(({ code, name }, i) => (
            <option key={i} value={code}>
              {name}
            </option>
          ))}
        </select>
        <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category, i) => (
            <option value={category} key={i}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="query"
          placeholder="Enter query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn">Search</button>
      </form>
    </div>
  );
};

export default Query;
