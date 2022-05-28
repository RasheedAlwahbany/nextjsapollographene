import client from "./apollo_client";
import { addQuery,selectQuery } from "./query";
import styles from "../styles/Home.module.css";
import React,{useState} from "react";
import { useMutation,gql } from '@apollo/client';
import apolloClient from "./apollo_client";
export default function AddBooks() {
const [state,setState]=useState("");
  

  
  const updateCache = (cache, { data: { books } }) => {
    const existingBook = cache.readQuery({
      query: selectQuery,
    });
    cache.writeQuery({
      query: selectQuery,
      data: { book: books},
    });
  }; 


  const [books,{data}]=useMutation(addQuery,{ update: updateCache });


  const handleSubmit=async (e)=> {
  e.preventDefault();
    // console.log(state);
    books({
      variables:{title:state.title,desc:state.desc}
      }).then(r=>console.log(r)).catch(e=>console.log(e));
      //console.log(data);

      alert("Book Added");
      
    
  
  }
  function handleChange(e) {
    if (e.target.files) {
      setState({ ...state, [e.target.name]: e.target.files[0] });
    } else {
      // console.log([e.target.name], e.target.value);
      setState({ ...state, [e.target.name]: e.target.value });
    }
  }
  
  return (
    <div className={styles.grid}>
      <form  onSubmit={handleSubmit} ><br/>
        <label >Title</label><br/>
        <input type="text" onChange={handleChange} id="title" name="title" /><br/>
        <label >Desc</label><br/>
        <input type="text" onChange={handleChange} id="desc" name="desc" /><br/>
        <button type="submit">Submit</button><br/>
      </form>
    </div>
  );
}
