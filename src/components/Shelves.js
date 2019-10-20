import React from "react";
// import Book component
import Book from "./Books";

const Section = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books ? (
            props.books.map(book => (
              <Book key={book.id} {...book} reorder={props.reorder} />
            ))
          ) : (
            <h1>No Books found</h1>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Section;
