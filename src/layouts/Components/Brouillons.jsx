import React from "react";

const Brouillons = ({ brouillons }) => (
  <>
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
  </>
);

const styles = {
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
