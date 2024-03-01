import React, { useEffect, useState } from "react";

export default function FormsDemo1() {
  const [bookTitle, setBookTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [author, setAuthor] = useState("William Shakespeare");
  const [data, setData] = useState({});
  const [bookerrorMsg, setbookErrorMsg] = useState("");
  const [DescerrorMsg, setDescErrorMsg] = useState("");
  const [flag, setFlag] = useState(true);

  useEffect(()=>{
    setbookErrorMsg("Book Title should not be empty");
    setDescErrorMsg("Book Descrption should not be empty");
  })

  const titleChangeHandler = (e) => {
    setBookTitle(e.target.value);
  };
  const descChangeHandler = (e) => {
    setDesc(e.target.value);
    console.log("desc");
  };
  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const data = { bookTitle, desc, author };
    console.log(data);
  };
  // console.log(bookTitle,author,desc);

  const changeHandler = (e) => {
    const input = e.target.name;
    if (input == "bookTitle") {
      setBookTitle(e.target.value);
      if (!e.target.value) {
        setbookErrorMsg("Book Title should not be empty");
        //setFlag(true);
      } else {
        setbookErrorMsg(" ");
        //setFlag(false);
      }
    }
 if (input == "Description") {
      setDesc(e.target.value);
      if (!e.target.value) {
        setDescErrorMsg("Book Descrption should not be empty");
        setFlag(true);
      } else {
        setDescErrorMsg("");
        setFlag(false);
      }
    }
    if (input == "author") {
      setAuthor(e.target.value);

      setFlag(false);
    }
    if(!(bookTitle&&desc)){
      setFlag(true)

    }
    else{
      setFlag(false)
    }
  };

  return (
    <>
      <div class>
        <form onSubmit={submitHandler}>
          <div>
            <label> Book Title</label>
            <input
              type="text"
              name="bookTitle"
              value={bookTitle}
              onChange={(e) => {
                changeHandler(e);
              }}
            ></input>
          </div>
          <br />
          <div>
            <label> Description</label>
            <textarea
              value={desc}
              name="Description"
              onChange={(e) => {
                changeHandler(e);
              }}
            />
            <br />
          </div>
          <br />
          <div>
            <label> Please select Author Name </label>
            <select
              value={author}
              name="author"
              defaultValue={"William Shakespeare"}
              onChange={(e) => {
                changeHandler(e);
              }}
            >
              <option value="William Shakespeare">
                Please Select Author Name
              </option>

              <option value="William Shakespeare">William Shakespeare</option>
              <option value="Agatha Christie">Agatha Christie</option>
              <option value="Barbara Cartland">Barbara Cartland</option>
              <option value="Danielle Steel">Danielle Steel</option>
            </select>
          </div>
          <br />
          <div>{/* <button type='submit' > Submit</button> */}</div>
          <span className="text-danger">{bookerrorMsg}</span>

          <br />
          <br />
          <span className="text-danger">{DescerrorMsg}</span>
          <button disabled={flag}>submit</button>
        </form>
      </div>
    </>
  );
}
