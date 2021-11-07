import React from "react";
import "./styles/Addbar.css";

class AddBar extends React.Component {
  addItem = event => {
    if (event.key === "Enter") {
      fetch(`http://localhost:8081/item/create/${event.target.value}`)
      window.location.reload(); 
    }
  };
  

  render() {
    return (
      <div className="Header">
        <input
          className="InputContainer"
          type="text"
          placeholder="Enter a task"
          onKeyDown={this.addItem}
        />
      </div>
    );
  }
}

export default AddBar;
