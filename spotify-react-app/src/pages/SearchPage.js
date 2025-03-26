import React, { useState } from "react";
import axios from "axios";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [accessToken, setAccessToken] = useState(""); // replace this with proper authentication logic

  const handleSearch = async () => {
    if (!query) return;

    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track,artist&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setResults(response.data.tracks.items);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Search Spotify</h1>
      <input
        type="text"
        placeholder="Search for a song or artist..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "60%", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <button
        onClick={handleSearch}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#1DB954",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      <div style={{ marginTop: "20px" }}>
        {results.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {results.map((track) => (
              <li key={track.id} style={{ margin: "10px 0", fontSize: "18px" }}>
                {track.name} by {track.artists.map((artist) => artist.name).join(", ")}
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
