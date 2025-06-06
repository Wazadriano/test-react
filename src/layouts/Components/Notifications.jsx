import React from "react";

const Notifications = () => {
  const notifications = [
    { texte: "Nouvelle commande à valider", important: true },
    { texte: "Mise à jour du catalogue", important: false },
    { texte: "Nouvel utilisateur à approuver", important: true },
  ];

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Notifications</h3>
      <ul style={styles.list}>
        {notifications.map((notif, index) => (
          <li key={index} style={notif.important ? styles.importantItem : styles.item}>
            {notif.texte}
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
    padding: "0.5rem 0",
    borderBottom: "1px solid #eee",
  },
  importantItem: {
    padding: "0.5rem 0",
    borderBottom: "1px solid #eee",
    color: "#d32f2f",
    fontWeight: "bold",
  },
};

export default Notifications;
