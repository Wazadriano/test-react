// BonDeCommande.jsx
import React from "react";

const BonDeCommande = ({ commandes }) => (
  <>
    {commandes.map((cmd) => (
      <div key={cmd.id} style={styles.line}>
        <div>
          <div style={styles.title}>{cmd.title}</div>
          <small>Ile de France, créer le 14/03/2025</small>
        </div>
        <div style={styles.actions}>
          <div style={{ ...styles.delay, backgroundColor: cmd.color }}>{cmd.delay}</div>
          <div style={styles.price}>{cmd.price}</div>
          <button style={styles.btnDark}>accepter</button>
          <button style={styles.btnLight}>refuser</button>
        </div>
      </div>
    ))}
  </>
);

const styles = {
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

export default BonDeCommande;
