import React from 'react'
/*
Functional componnet to display list of movies. 
*/

function PlayList(props) {
    return (
        <>
            {props.movies.map((movie) => (
                <div key={movie.imdbID} className="card">
                    <img src={movie.Poster} className="card-img-top h-100"/>
                    <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                     <p className="card-subtitle">{movie.Year}</p>
                    </div>
                </div>  
            ))}
        </>

    )
}

export default PlayList

