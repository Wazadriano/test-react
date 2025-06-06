import React from "react";

const Brouillons = ({ brouillons }) => (
  <div style={styles.encart}>
    <div style={styles.header}>
      <strong>Bon de commande</strong>
      <button style={styles.toggleBtn}>▲</button>
    </div>
    {brouillons.map((item) => (
      <div key={item.id} style={styles.line}>
        <div>
          <div style={styles.title}>{item.title}</div>
          <small>créer le 14/03/2025</small>
        </div>
        <div style={styles.actions}>
          <div style={styles.price}>{item.price}</div>
          <button style={styles.btnDark}>reprendre</button>
          <button style={styles.btnLight}>supprimer</button>
        </div>
      </div>
    ))}
  </div>
);

const styles = {
  encart: {
    background: "#eee",
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
  toggleBtn: {
    background: "none",
    border: "none",
    fontSize: "1.1rem",
    cursor: "pointer",
  },
  line: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.7rem 0",
    borderBottom: "1px solid #ddd",
  },
  title: {
    fontWeight: "500",
    marginBottom: "0.3rem",
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
    marginRight: "1rem",
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

export default Brouillons;
