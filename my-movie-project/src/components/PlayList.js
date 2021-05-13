import React from 'react'

/*
Functional componnet to display list of movies. 
*/

function PlayList(props) {
    return (
        <div className='d-flex'>
            {props.movies.map((movie) => (
                    <div key={movie.imdbID} className="card m-1" style={{width:"18rem"}}>
                        <img src={movie.Poster} className="card-img-top" style={{height: "24rem"}}/>
                        <div className="card-body">
                            <h5 className="card-title">{movie.Title}</h5>
                            <p className="card-subtitle">{movie.Year}</p>
                            {props.isPlayList == "false"? <button className="float-right" onClick={() => props.onClick(movie)}><i className="fas fa-plus"></i></button> : null}
                        </div>
                    </div>  
                
            ))}
        </div>

    )
}

export default PlayList

