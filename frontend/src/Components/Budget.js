// Budget.js
import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import '../css/Comp.css';
import axios from 'axios';

export default function Budget() {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/view/getBudget");
                const data = response.data;
                setItems(data);
                setFilteredItems(data);
            } catch (error) {
                console.error('Error fetching budget:', error);
            }
        };

        fetchItems();
    }, []);

    useEffect(() => {
        const sortedItems = [...items].sort((a, b) => b.budget - a.budget);
        const results = sortedItems.filter(item =>
            item.company.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(results);
    }, [searchTerm, items]);

    return (
        <div className={`budget-page ${darkMode ? 'dark' : ''}`}>
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
                        {filteredItems.map(item => (
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
};
