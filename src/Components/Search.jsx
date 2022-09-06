import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const Search = () => {
  const { searchParam, handleOnChange, handleSubmit } = useContext(GlobalContext);
  return (
    <div className="search">
      <input
        onChange={handleOnChange}
        value={searchParam}
        type="text"
        name="search"
        placeholder="Enter movie keyword"
        className="search"
      />
      <button disabled={searchParam.trim().length <= 2} onClick={handleSubmit} className='btn'>Search</button>
    </div>
  );
};

export default Search;
