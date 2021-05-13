import React, {useState, useEffect} from 'react'
import PlayList from './components/PlayList'
import ConfirmationDialog from './components/ConfirmationDialog'

function App() {

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [playList, setPlayList] = useState([]);

  const togglePopUp = (movie) => {
    setPopUpOpen(!isPopUpOpen);   
  }

  const item = {name: "test", color: "green", onClick: togglePopUp};

  const addToPlayList = (movie) => {
    console.log(movie);
    const newPlayList = [...playList, movie];
    console.log(newPlayList);
    setPlayList(newPlayList);
    item.name = movie.Title;
    togglePopUp();
    console.log(playList);
  }

  
  
  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=e118a2c6&s="+searchTerm)
      .then(res => res.json())
      .then ( (result) => {
        console.log(result);
        setMovies([]);
        setError(null)
       if (result.Response == "True") {
         if (result.Search)
            setMovies(result.Search);
       } else {
          if (searchTerm != "")
            setError(result.Error) 
       }
      }
      )
  }, [searchTerm]);

  const handleOnChnage = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h3>Movies</h3>
        </div>
        <div className="col col-sm-4">
          <form>
          <input type="text" value={searchTerm} placeholder="Enter movie name...."  onChange={handleOnChnage}/>
        </form>
        </div>
      </div>
      <div className="row">
       {error? <div className="col"> {error} </div> : ""}
      </div>
      <div className="row" style={{flexWrap: "nowrap", "overflowX": "auto"}}>
        { error ? "" : <PlayList movies={movies} onClick={addToPlayList} isPlayList="false"/> }
      </div>
      <div className="row"><div className="col"><h3>PlayList</h3></div></div>
      <div className="row" style={{flexWrap: "nowrap", "overflowX": "auto"}}>
        <PlayList movies={playList} onClick={addToPlayList}/>
      </div>
    </div>
    {isPopUpOpen && <ConfirmationDialog item={item} />}
    </div>
  );  
 
}

export default App;
