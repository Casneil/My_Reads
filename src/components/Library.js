import React, { useEffect } from "react";
// import Shelf component
import Section from "./Shelves";
import { getAll } from "../BooksAPI";
// // import AddButton
import AddButton from "./AddButton";

const Library = props => {
  const fetchData = async data => {
    const book = await getAll();
    props.add(book);
  };
  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.err(err);
    }
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Section
            title="Currently Reading"
            books={props.currentlyReading}
            reorder={props.reorder}
          />
          <Section
            title="Want to Read"
            books={props.wantToRead}
            reorder={props.reorder}
          />
          <Section title="Read" books={props.read} reorder={props.reorder} />
        </div>
        <div>
          <AddButton />
        </div>
      </div>
    </div>
  );
};

export default Library;
