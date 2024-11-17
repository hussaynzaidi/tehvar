// Budget.js
import React, { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import "../css/Comp.css";
import axios from "axios";
import { useAuthContext } from "../Hooks/useAuthContext";

export default function Budget() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const { user } = useAuthContext();
  useEffect(() => {
    console.log("Budget component mounted");
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `${process.env.backend_url}/api/view/getBudget`
        );
        console.log(user.token)
        const data = response.data;
        console.log(data)
        setItems(data);
        if (data.length === 0) {
          console.log('No budget data found');
        }
        setFilteredItems(data);
      } catch (error) {
        console.error("Error fetching budget:", error);
      }
    };

    if (user) {
      fetchItems();
    }
  }, [user]);

  useEffect(() => {
    const sortedItems = [...items].sort((a, b) => b.budget - a.budget);
    const results = sortedItems.filter((item) =>
      item.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
  }, [searchTerm, items]);

  return (
    <div className={`budget-page ${darkMode ? "dark" : ""}`}>
      <h1>Budget</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="budget-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Staff</th>
              <th className="company-column">Company</th>
              <th>Budget</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.type}</td>
                <td>{item.staffno}</td>
                <td className="company-column">{item.company}</td>
                <td>{item.budget}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
