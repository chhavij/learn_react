import React from 'react'
import PlayList from './components/PlayList'
import movieData from './exampledata/movieData'

function App() {

  return (
    <div className="container-fluid">
      <div className="row">
        <PlayList movies={movieData} /> 
      </div>
    </div>
  );
}

export default App;
