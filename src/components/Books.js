import React from "react";
import { update } from "../BooksAPI";

const Book = props => {
  const change = async e => {
    const shelf = e.target.value;
    const book = props;
    const result = await update(book, shelf);
    props.reorder(book, shelf, result);
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 195,
              height: 200,
              backgroundImage: `url(${
                props.imageLinks
                  ? props.imageLinks.thumbnail
                  : props.previewLink
              })`
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={change} value={props.shelf}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">
          {props.authors ? props.authors[0] : props.publisher}
        </div>
      </div>
    </li>
  );
};

export default Book;
