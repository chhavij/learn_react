import React, {useState, useEffect} from 'react'
import PlayList from './components/PlayList'
import ConfirmationDialog from './components/ConfirmationDialog'
import Heading from './components/Heading'
import Message from './components/MessageComp'
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [playList, setPlayList] = useState([]);
  const [view, setView] = useState("home");
  
  const color = "#000000d9";

  const togglePopUp = () => {
    setPopUpOpen(!isPopUpOpen);   
  }
  const item = {color: "gray", onClick: togglePopUp};

  const addToPlayList = (movie) => {
    const movieExisted = playList.some(mov => mov.imdbID === movie.imdbID);
    if(!movieExisted) {
      const newPlayList = [...playList, movie];
      setPlayList(newPlayList);
    }
    togglePopUp();
  }

  const removeFromPlayList = (movie) => {
    const newPlayList = playList.filter(mov => mov.imdbID !== movie.imdbID);
    setPlayList(newPlayList);
  }
 
  const changeView = (newview) => {
    setView(newview);
  }

  const handleOnChnage = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=e118a2c6&type=movie&s="+searchTerm)
      .then(res => res.json())
      .then ( (result) => {
          console.log(result);
          setMovies([]);
          setError(null)
          if (result.Response === "True") {
              if (result.Search)
                  setMovies(result.Search);
          } else {
              if (searchTerm !== "")
                  setError(result.Error) 
          }
        })
  }, [searchTerm]);

  return (
    <div className="main-div" style={{backgroundColor: isPopUpOpen? "gray" : color}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <Heading level="1" heading="Movies"/>
          </div>

          <div className="col-sm-6 nav-menu" >
            <button className="btn btn-link" onClick={()=>changeView("home")}><Heading level="5" heading="Home"/></button>
            <button className="btn btn-link" onClick={()=>changeView("list")}><Heading level="5" heading="Playlist"/></button>
          </div>

          { view === "home" &&
            <div className="col-sm-3">
              <form><input className="search-box mt-3" type="text" value={searchTerm} placeholder="Type to search for movies ...."  onChange={handleOnChnage}/></form>
            </div>
          } 
        </div>

        { view === "home" &&
          <>
            {!movies.length && !error && <Message message="No movies to display. Type in search box to search for movies..."/>}
            { error && <Message message={error} />}
            <div className="row row-aligment">
              { !error && (view === "home") && <PlayList movies={movies} onClick={addToPlayList} isPlayList="false"/> }
            </div>
          </>
        } 

        { view === "list" &&
          <>
            {!playList.length && <Message message="Your playlist is empty"/>}
            <div className="row">
              <PlayList movies={playList} onClick={removeFromPlayList} isPlayList="true"/>
            </div>
          </>
        }
      </div>
      {isPopUpOpen && <ConfirmationDialog item={item} />}
    </div>
  );  
 
}

export default App;
