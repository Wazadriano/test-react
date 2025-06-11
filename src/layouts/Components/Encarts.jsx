import React, { useState } from "react";

const Encart = ({ title, count, children }) => {
  const [open, setOpen] = useState(true);
  const [hoverToggle, setHoverToggle] = useState(false);

  const contentStyle = {
    transition: "max-height 0.3s ease, opacity 0.3s ease",
    overflow: "hidden",
    maxHeight: open ? "1000px" : "0px",
    opacity: open ? 1 : 0,
  };

  const toggleStyle = {
    ...styles.toggle,
    transform: hoverToggle ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.2s ease, background 0.2s ease",
    background: hoverToggle ? "#c55416" : "#dd7025",
  };

  return (
    <div style={styles.encart}>
      <div style={styles.header}>
        <div style={styles.leftGroup}>
          <strong>{title}</strong>
          {typeof count === "number" && (
            <span style={styles.badge}>{count}</span>
          )}
        </div>
        <button
          style={toggleStyle}
          onClick={() => setOpen((o) => !o)}
          onMouseEnter={() => setHoverToggle(true)}
          onMouseLeave={() => setHoverToggle(false)}
        >
          {open ? "▲" : "▼"}
        </button>
      </div>
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

const styles = {
  encart: {
    marginBottom: "1.5rem",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#ccc",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    marginBottom: "0.5rem",
    fontWeight: "bold",
    cursor: "default",
  },
  leftGroup: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  badge: {
    background: "#e63946",
    color: "white",
    borderRadius: "50%",
    padding: "0.2rem 0.6rem",
    fontSize: "0.8rem",
  },
  toggle: {
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "28px",
    height: "28px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Encart;
