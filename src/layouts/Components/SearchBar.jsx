// src/layouts/Components/SearchBar.jsx
import React from "react";

const SearchBar = ({ value, onSearch }) => (
  <div style={styles.wrapper}>
    <input
      type="text"
      placeholder="Trouver une commande"
      style={styles.input}
      value={value}
      onChange={onSearch}
    />
  </div>
);

const styles = {
  wrapper: {
    display: "flex",
    marginBottom: "1.5rem",
  },
  input: {
    flex: 1,
    padding: "0.6rem 1rem",
    borderRadius: "2rem",
    border: "1px solid #ccc",
    fontWeight: "bold",
  },
};

export default SearchBar;
