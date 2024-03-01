import React,{useState} from 'react'

export default function EditMovie({selectedMovie,saveEditedMovie,cancelSave}) {
    const [movie, setMovie] = useState(selectedMovie);
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setMovie({ ...movie, [name]: value })
    }
    return <>
        <h3>Edit Movie Information</h3>
        <p>Title : <input value={movie.Title} name='Title' onChange={(e) => changeHandler(e)} /></p>
        <p>Year : <input value={movie.Year} name='Year' onChange={(e) => changeHandler(e)} /></p>
        <p>Runtime : <input value={movie.Runtime} name='Runtime' onChange={(e) => changeHandler(e)} /></p>
        <div className='text-center'>
            <button onClick={cancelSave} className='btn btn-secondary mx-1'>Cancel</button>
            <button onClick={() => saveEditedMovie(movie)} className='btn btn-primary'>Save</button>
        </div>
    </>
}