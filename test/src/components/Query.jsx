import React from "react";

const Query = () => {
  return (
    <div className="query-box">
      <select name="" id="">
        <option value="country">Country</option>
        <option value="xxx">query</option>
      </select>
      <div>
        <input type="text" placeholder="Enter your query" />
        <button>submit</button>
      </div>
    </div>
  );
};

export default Query;
