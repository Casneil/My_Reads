import React from "react";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <div className="open-search">
      <div>
        <Link to={"/search"}>
          <button>Add books</button>
        </Link>
      </div>
    </div>
  );
};

export default AddButton;
