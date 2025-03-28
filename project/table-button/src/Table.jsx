import React from "react";
import { useState, useEffect } from "react";

function Table({ users }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleButtonClick = (item) => {
    setSelectedItem(item);
    setInputValue(""); // Reset input value when opening
    setIsModalOpen(true);
  };

  const handleModalSubmit = () => {
    // You can handle the user input here, e.g., update state or send to server
    console.log(`User entered: ${inputValue} for item ID: ${selectedItem?.id}`);
    handleModalClose();
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleButtonClick(item)}>Show Input</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && selectedItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>
              Enter Value for {selectedItem.firstName} {selectedItem.lastName}
            </h2>
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter value..." />
            <div className="modal-actions">
              <button onClick={handleModalSubmit}>Submit</button>
              <button onClick={handleModalClose}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Table;
