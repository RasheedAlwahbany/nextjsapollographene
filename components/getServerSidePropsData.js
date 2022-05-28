import client from "../components/apollo_client";
import { selectQuery } from "./query";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from 'react';

  export default function Books() {
    const [books,setBooks]=useState([]);
        
        const getBooks = async () => {
          const { data } = await client.query({
              query: selectQuery
          });
          setBooks(data.all_books);
          console.log(data.all_books);
          
          
      };
    
  
      useEffect(() => {
        getBooks().then(r => console.log(r));
        
      }, []);
  
    return (
          <div className={styles.grid}>
            {books?.map((book) => (
              <div className={styles.card} key={book.id}>
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                </div>))}
          </div>
       
    );
  }

