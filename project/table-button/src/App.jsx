import React, { useState, useEffect } from "react";
import faker from "faker";
import "./App.css";
import Table from "./Table";

function App() {
  const [data, setData] = useState([]);


  // Generate fake data on component mount
  useEffect(() => {
    const generateData = (count) => {
      const items = [];
      for (let i = 0; i < count; i++) {
        items.push({
          id: faker.datatype.uuid(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
        });
      }
      return items;
    };
    setData(generateData(10)); // Generate 10 rows of data
  }, []);

  return (
    <div className="App">
      <h1>React Table with Button</h1>
      <Table users={data} />
    </div>
  );
}

export default App;
