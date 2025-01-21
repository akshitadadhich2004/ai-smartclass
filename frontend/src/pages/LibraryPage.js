import React, { useState } from "react";

function LibraryPage() {
  const [resources, setResources] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchLibraryResources = async () => {
    const response = await fetch(`http://localhost:5000/api/library?search=${searchQuery}`);
    const data = await response.json();
    setResources(data.resources);
  };

  return (
    <div className="bg-gradient-to-br from-brown-200 to-brown-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-brown-800">Digital Library</h1>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search for books..."
            className="p-2 rounded border border-brown-400 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={fetchLibraryResources}
            className="mt-4 bg-brown-500 text-white px-4 py-2 rounded hover:bg-brown-600"
          >
            Search
          </button>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((resource) => (
            <div
              key={resource._id}
              className="p-4 border border-brown-300 rounded bg-white"
            >
              <h2 className="text-xl font-bold text-brown-700">{resource.title}</h2>
              <p className="text-brown-500">Class: {resource.class}</p>
              <p className="text-brown-500">Subject: {resource.subject}</p>
              <a
                href={resource.fileUrl}
                className="mt-2 inline-block bg-brown-500 text-white px-4 py-2 rounded hover:bg-brown-600"
                download
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LibraryPage;
