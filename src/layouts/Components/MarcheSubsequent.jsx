import React from "react";

const MarcheSubsequent = ({ marches }) => (
  <div style={styles.encart}>
    <div style={styles.header}>
      <strong>Marché Subséquent</strong>
      <span style={styles.badge}>{marches.length}</span>
      <button style={styles.toggleBtn}>▲</button>
    </div>
    {marches.map((m) => (
      <div key={m.id} style={styles.line}>
        <div>
          <div style={styles.title}>{m.title}</div>
          <small>Ile de France, créer le 14/03/2025</small>
        </div>
        <div style={styles.actions}>
          <div style={{ ...styles.delay, backgroundColor: m.color }}>{m.delay}</div>
          <div style={styles.price}>{m.price}</div>
          <button style={styles.btnDark}>candidater</button>
          <button style={styles.btnLight}>refuser</button>
        </div>
      </div>
    ))}
  </div>
);

const styles = {
  encart: {
    background: "#f2f2f2",
    padding: "1rem",
    borderRadius: "10px",
    marginBottom: "1.5rem",
  },
  header: {
    display: "flex",
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
  toggleBtn: {
    background: "#dd7025",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  line: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.7rem 0",
    borderBottom: "1px solid #ddd",
  },
  title: {
    fontWeight: "600",
    marginBottom: "0.3rem",
    maxWidth: "400px",
  },
  actions: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
  },
  delay: {
    padding: "0.2rem 0.5rem",
    fontSize: "0.75rem",
    borderRadius: "5px",
    fontWeight: "bold",
  },
  price: {
    fontWeight: "600",
    marginRight: "0.5rem",
  },
  btnDark: {
    backgroundColor: "#2f3b48",
    color: "white",
    border: "none",
    borderRadius: "1rem",
    padding: "0.3rem 0.8rem",
    cursor: "pointer",
  },
  btnLight: {
    backgroundColor: "white",
    color: "#2f3b48",
    border: "1px solid #2f3b48",
    borderRadius: "1rem",
    padding: "0.3rem 0.8rem",
    cursor: "pointer",
  },
};


export default MarcheSubsequent;
