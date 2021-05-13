import React from 'react'

/*
Functional componnet to display list of movies. 
*/

function PlayList(props) {
    return (
        <>
            {props.movies.map((movie, index) => (
                    <div key={index} className="card m-1 movie-card-width" >
                        <img src={movie.Poster} className="card-img-top movie-card-img-height" alt={movie.Title}/>
                        <div className="card-body">
                            <h5 className="card-title">{movie.Title}</h5>
                            <p className="card-subtitle">{movie.Year}</p>
                            {props.isPlayList === "false"? <button className="float-right" onClick={() => props.onClick(movie)}><i className="fas fa-plus"></i></button> : null}
                        </div>
                    </div>  
                
            ))}
        </>
    )
}

export default PlayList

