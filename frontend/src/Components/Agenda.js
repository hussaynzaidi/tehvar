// Agenda.js
import React, { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import "../css/Comp.css";
import axios from "axios";
import { useAuthContext } from "../Hooks/useAuthContext";

export default function Agenda() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/view/getAgenda",
          {
            headers: {
              'Authorization': `Bearer ${user.token}`,
            },
          }
        );
        const data = response.data;
        setItems(data);
        setFilteredItems(data);
      } catch (error) {
        console.error("Error fetching agenda:", error);
      }
    };

    if (user) {
      fetchItems();
    }
  }, [user]);

  useEffect(() => {
    const sortedItems = [...items].sort((a, b) => b.starttime - a.starttime);
    const results = sortedItems.filter((item) =>
      item.theme.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
  }, [searchTerm, items]);

  return (
    <div className={`budget-page ${darkMode ? "dark" : ""}`}>
      <h1>Agenda</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="budget-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Item ID</th>
              <th>Type</th>
              <th>Start Time</th>
              <th className="company-column">theme</th>
              <th>Room</th>
              <th>Registrations</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id}>
                <td>{item.agenda_id}</td>
                <td>{item.id}</td>
                <td>{item.type}</td>
                <td>{item.starttime}</td>
                <td className="company-column">{item.theme}</td>
                <td>{item.rid}</td>
                <td>{item.registeredcount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
