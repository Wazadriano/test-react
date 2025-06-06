import React from "react";

const ActionButtons = ({ role }) => {
  const buttons =
    role === "admin-client"
      ? ["Créer une commande", "Lancer un marché subséquent", "Récupérer une commande"]
      : role === "client"
      ? ["Créer une commande", "Récupérer une commande"]
      : role === "interlocuteur"
      ? ["Créer une commande"]
      : [];

  return (
    <div style={styles.actions}>
      {buttons.map((btn, index) => (
        <button key={index} style={styles.button}>
          + {btn}
        </button>
      ))}
    </div>
  );
};

const styles = {
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    marginBottom: "2rem",
  },
  button: {
    background: "#444e61",
    color: "white",
    padding: "0.8rem 1.4rem",
    border: "none",
    borderRadius: "2rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default ActionButtons;
