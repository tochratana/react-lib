import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://english-club.istad.co/skills")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  // Filter data based on search input
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="p-4 sm:ml-64">
      <h1 className="text-red-600">Hello</h1>
      <div className="p-4 rounded-lg mt-14">
        <h1>Hello</h1>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2"
          />
          <ul>
            {filteredData.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default User;
