import React from "react";

const SearchBar = () => (
  <div style={styles.wrapper}>
    <input type="text" placeholder="Trouver une commande" style={styles.input} />
  </div>
);

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1.5rem",
  },
  input: {
    flex: 1,
    padding: "0.6rem 1rem",
    borderRadius: "2rem",
    border: "1px solid #ccc",
    marginRight: "1rem",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#dd7025",
    color: "white",
    border: "none",
    borderRadius: "2rem",
    padding: "0.7rem 1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default SearchBar;
