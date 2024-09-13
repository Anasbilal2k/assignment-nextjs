'use client'; // This marks the component as a Client Component

import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]); // Array for storing search results

  // Handle the input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Dummy data for search results (replace with API call if needed)
  const data = ['Profile Page', 'Contact Page', 'Address Page', 'Skills Section'];

  // Handle the search logic
  const handleSearch = () => {
    if (query) {
      const filteredResults = data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-300 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-4">Search Page</h1>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Type to search..."
          value={query}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleSearch}
          className="ml-2 p-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </div>

      {/* Search Results */}
      <div className="w-full max-w-md">
        {results.length > 0 ? (
          <ul className="list-disc pl-5">
            {results.map((result, index) => (
              <li key={index} className="text-lg">
                {result}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
