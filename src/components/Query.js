import React, { useEffect, useState } from "react";
import { search, getAll } from "../BooksAPI";
import Book from "./Books";
import { Link } from "react-router-dom";

const Search = props => {
  const [find, setFind] = useState("");
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    const books = await getAll();

    props.add(books);
  };
  console.log(books);
  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.err(err);
    }
  }, []);

  const updateSearch = async e => {
    const search1 = e.target.value;
    setFind(search1);
    try {
      if (search1) {
        const reply = await search(search1);
        setBooks(reply);
      } else {
        setBooks([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={"/"}>
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={updateSearch}
            value={find}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.length >= 1 &&
            books.map(book => {
              const section = props.books.find(
                searchBook => searchBook.id === book.id
              );
              section ? (book.shelf = section.shelf) : (book.shelf = "none");

              return <Book key={book.id} {...book} reorder={props.reorder} />;
            })}
        </ol>
      </div>
    </div>
  );
};

export default Search;
