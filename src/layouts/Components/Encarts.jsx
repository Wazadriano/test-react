import React from "react";

const Encart = ({ title, count, children }) => (
  <div style={styles.encart}>
    <div style={styles.header}>
      <strong>{title}</strong>
      <span style={styles.badge}>{count}</span>
      <button style={styles.toggle}>▲</button>
    </div>
    {children}
  </div>
);

const styles = {
  encart: {
    background: "#eee",
    padding: "1rem",
    borderRadius: "10px",
    marginBottom: "1.5rem"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#ccc",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    fontWeight: "bold",
    marginBottom: "1rem"
  },
  badge: {
    background: "#e9481e",
    color: "white",
    borderRadius: "50%",
    padding: "0.2rem 0.6rem",
    fontSize: "0.8rem"
  },
  toggle: {
    background: "none",
    border: "none",
    fontSize: "1rem",
    cursor: "pointer"
  }
};

export default Encart;
