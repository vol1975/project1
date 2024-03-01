import React, { useState } from "react";
import HttpLink from "./Http";
import axios from "axios";
export default function AddMovie({ addMovieTitle }) 
{
   const initialMovie = { Title: "", Year: "", Runtime: 0 };
   const [movie, setMovie] = useState(initialMovie);

  // const changeHandler = (e) => {
  //   const { name, value } = e.target;
  //   setMovie({ ...movie, [name]: value });
  // };

   //const addMovie = (movie) => {
  // //   addMovieTitle(movie);
  // //   setMovie(initialMovie);
   // };


const[post,setPost]=useState({Title: "", Year: "", Runtime: 0})
const changeHandler = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
    setMovie({ ...movie, [name]: value })
    
    console.log(post,movie)
   };

   const handleSubmit= async(event)=>{
    event.preventDefault();
    const url='https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies';
    try{const response= await  axios.post(url,{post})
      console.log(response.data,response.status);
 

    console.log(url)
   }
   catch(error){
    console.log(error.response)
   }
   }






  return (
    <>
      <h3> Add Movie</h3>
      <p>
        Title:
        <input
          value={movie.Title}
          name="Title"
          onChange={(e) => changeHandler(e)}
        />
      </p>
      <p>
      Year :
        <input
          value={movie.Year}
          name="Year"
          onChange={(e) => changeHandler(e)}
        />
      </p>
      <p>
        Runtime :
        <input
          value={movie.Runtime}
          name="Runtime"
          onChange={(e) => changeHandler(e)}
        />
      </p>
      <div className="text-center">
        <button onClick={(e) => handleSubmit(e)} className="btn btn-primary">
          Add Movie
        </button>
      </div>
    </>
  );
}
