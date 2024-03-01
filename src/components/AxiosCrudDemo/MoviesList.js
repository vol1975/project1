import React,{useState} from 'react'
import './MoviesCss.css';
import Modal from 'react-modal';
export default function MoviesList({ movieslist,deleteMovie,editMovie }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const initialMovie = { Title: "", Year: "", Runtime: 0 };
    const [selectedMovie,setselectedmovie]=useState(initialMovie)
  const[movie,setMovie]=useState("");
    function openModal(movie) {
        setIsOpen(true);
      // setselectrdEmp([...emp]);
        //console.log(eid)
        setMovie(movie)
    }
    function closeModal() {
        setIsOpen(false);}
    
    
    
    
    
    
    
    return <>
        <table className='table table-bordered'>
            <tbody>
                {movieslist.map(movie => {
                    return <tr key={movie.Title}>
                        <td>{movie.Title}</td>
                        <td>{movie.Year}</td>
                        <td>{movie.Runtime}</td>
                        <td> <button className='btn btn-success' onClick={()=>openModal(movie)}> View</button> </td>
                    <Modal
                           isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Movie Modal"
                            shouldCloseOnOverlayClick={false}
                            >
                                
                               
                                <div>
                                  
                                    
                                    <h3> MovieTitle: {movie.Runtime.Title}</h3>
                                    <h3> Year : {movie.Year}</h3>
                                    <h3> Runtime : {movie.Runtime}</h3>
                                 
                                  
                                </div>
                                <button onClick={closeModal}>close</button>
                               
                
                    </Modal>




                        <td>
                            <button className='btn btn-success'>View</button>
                            <button className='btn btn-primary mx-1' onClick={() => editMovie(movie)}>Edit</button>
                            <button className='btn btn-danger' onClick={() => deleteMovie(movie.Title)} >
                                Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}