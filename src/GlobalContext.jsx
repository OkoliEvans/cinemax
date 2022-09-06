import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext({
  searchParam: "",
  movieList: [],
  handleSubmit: () => {},
  handleOnChange: () => {},
  loading: false,
});

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const retrieveDataFromLocalStorage = JSON.parse(
      localStorage.getItem("movieList")
    );
    if (retrieveDataFromLocalStorage && retrieveDataFromLocalStorage.length > 0)
      setMovieList(retrieveDataFromLocalStorage);
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchParam}&apikey=70c11897`
    );
    const data = await response.json();
    console.log(data);
    if (data) {
      setMovieList(data.Search);
      localStorage.setItem("movieList", JSON.stringify(data.Search));
      setLoading(false);
      setSearchParam("");
    }
  };

  const handleOnChange = (event) => {
    setSearchParam(event.target.value);
    console.log(event.target.value);
  };

  const contextValue = {
    searchParam,
    handleSubmit,
    handleOnChange,
    loading,
    movieList,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
