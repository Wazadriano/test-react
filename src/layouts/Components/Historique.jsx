import React from "react";

const Historique = () => {
  const historiques = [
    { texte: "Commande 45321 validée", date: "12/03/2024" },
    { texte: "Ajout de l'utilisateur J.Dupont", date: "10/03/2024" },
    { texte: "Commande 45287 supprimée", date: "08/03/2024" },
  ];

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Historique</h3>
      <ul style={styles.list}>
        {historiques.map((item, index) => (
          <li key={index} style={styles.item}>
            <span>{item.texte}</span>
            <span style={styles.date}>{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  card: {
    background: "#ffffff",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "1rem",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.5rem 0",
    borderBottom: "1px solid #eee",
  },
  date: {
    color: "#999",
    fontSize: "0.9rem",
  },
};

export default Historique;
