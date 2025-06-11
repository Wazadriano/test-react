// src/layouts/Components/Encarts.jsx
import React, { useState } from "react";

const Encart = ({ title, count, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div style={styles.encart}>
      <div style={styles.header}>
        <strong>{title}</strong>
        {typeof count === "number" && (
          <span style={styles.badge}>{count}</span>
        )}
        <button
          style={styles.toggle}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "▲" : "▼"}
        </button>
      </div>
      {open && children}
    </div>
  );
};

const styles = {
  encart: {
    background: "#f2f2f2",
    padding: "1rem",
    borderRadius: "10px",
    marginBottom: "1.5rem",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#ccc",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    marginBottom: "1rem",
    fontWeight: "bold",
  },
  badge: {
    background: "#e63946",
    color: "white",
    borderRadius: "50%",
    padding: "0.2rem 0.6rem",
    fontSize: "0.8rem",
  },
  toggle: {
    background: "#dd7025",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Encart;
