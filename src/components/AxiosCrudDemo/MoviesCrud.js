import React, { useEffect } from 'react'
import { useState } from 'react'
import HttpLink from './Http'
import MoviesList from './MoviesList'
import EditMovie from './EditMovie'
import AddMovie from './AddMovie'
export default function MoviesCrud() {
    const[movieslist,setMovieslist]=useState([])
    const[isEdit,setIsEdit]=useState(false)
    const initialMovie = { Title: "", Year: "", Runtime: 0 };
    const [selectedMovie, setSelectedMovie] = useState(initialMovie);

  const fetchmovies= async()=>{
        let url='/movies'
        let responce=await HttpLink.get(url);
       setMovieslist( responce.data)
       console.log(movieslist)
        console.log(responce.data);

  }
useEffect(()=>{
    fetchmovies()
},[]);

const editMovie = (movie) => {
    setSelectedMovie(movie);
    setIsEdit(true);
}
const saveEditedMovie = (editedmovie) => {
    let updatedmovies = movieslist.map(movie => {
        if (movie.Title === editedmovie.Title) {
            return editedmovie;
        } else {
            return movie;
        }
    })
    setMovieslist([...updatedmovies]);
    setIsEdit(false);
}

const cancelSave=()=>{
    setSelectedMovie(initialMovie);
    setIsEdit(false);
}



const addMovieTitle=(movie)=>{
    let tempArr = [...movieslist, movie]
    setMovieslist(tempArr);

}
const deleteMovie=(Title)=>{
    
        let filteredMovies = movieslist.filter(movie => movie.Title !== Title);
        setMovieslist([...filteredMovies])
  
}
  
  
    return <>
     <h2 className='text-center'> MoviesCRUD Component</h2>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-8'>
                    <h1> <MoviesList movieslist={movieslist} deleteMovie={deleteMovie} editMovie={editMovie}/></h1>
                 </div>
                 <div className='col-sm-4'>
                    {isEdit?<EditMovie
                    selectedMovie={selectedMovie}
                    saveEditedMovie={saveEditedMovie}
                    cancelSave={cancelSave}
                    
                    />:<AddMovie  addMovieTitle={addMovieTitle}/>}
                    
                    
                    
                    
                    </div>  
                 </div>
                 </div> 
                
  </>
}
