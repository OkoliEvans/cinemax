import { useContext } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import Search from "./Components/Search";
import { GlobalContext } from "./GlobalContext";


const App = () => {
  const {movieList} = useContext(GlobalContext);
  return (
    
      <div className="app" style={{ background: movieList && movieList.length > 0 && 'darkblue'}}>
        <h1>cinemax</h1>
        <Search />
        <MovieList />
      </div>
  );
};

export default App;
