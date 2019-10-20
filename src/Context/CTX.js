import React, { Component, createContext } from "react";

export const UserContext = createContext();

class Index extends Component {
  constructor(props) {
    super();

    this.state = {
      books: [],
      read: [],
      wantToRead: [],
      currentlyReading: []
    };
  }

  reorder = (book, area, Areas) => {
    if (area === "none") {
      const addedBooks = this.state.books.filter(
        current => current.id !== book.id
      );

      this.add(addedBooks);
    } else {
      const addedBooks = this.state.books.map(current => {
        const searchBooks = Areas[area].find(bookID => bookID === current.id);

        if (searchBooks) {
          current.shelf = area;
        }
        return current;
      });

      this.add(addedBooks);
    }
  };

  add = books => {
    const wtr = books.filter(book => book.shelf === "wantToRead");
    const rd = books.filter(book => book.shelf === "read");
    const cr = books.filter(book => book.shelf === "currentlyReading");
    this.setState({
      wantToRead: wtr,
      books: books,
      read: rd,
      currentlyReading: cr
    });
  };

  render() {
    const ctx = {
      ...this.state,
      add: this.add,
      reorder: this.reorder
    };

    return (
      <UserContext.Provider value={{ ...ctx }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default Index;
