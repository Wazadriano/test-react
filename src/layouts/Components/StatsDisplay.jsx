import React from "react";

const StatsDisplay = ({ role = "utilisateur" }) => {
  let stats = [];

  switch (role) {
    case "interlocuteur":
    case "gestionnaire":
    case "admin-client":
      stats = [
        { title: "Brouillons", value: 1 },
        { title: "En attente", value: 2 },
        { title: "A Valider", value: 3 },
        { title: "Accepté", value: 5 },
        { title: "Refusé", value: 0 },
      ];
      break;
    case "client":
      stats = [
        { title: "Brouillons", value: 1 },
        { title: "En attente", value: 2 },
        { title: "Accepté", value: 5 },
        { title: "Refusé", value: 0 },
      ];
      break;
    default:
      stats = [
        { title: "Mes Brouillons", value: 1 },
        { title: "Mes demandes", value: 2 },
      ];
  }

  return (
    <section style={styles.dashboardSection}>
      <div style={styles.headerRow}>
        <h2>Entité</h2>
        <div style={styles.filters}>
          <select style={styles.select}>
            <option>75</option>
            <option>50</option>
            <option>25</option>
          </select>
          <select style={styles.select}>
            <option>cette semaine</option>
            <option>ce mois</option>
            <option>personnalisé</option>
          </select>
        </div>
      </div>

      <div style={styles.statsBar}>
        {stats.map((stat, i) => (
          <React.Fragment key={i}>
            <div style={styles.statBlock}>
              <div style={styles.label}>{stat.title}</div>
              <div style={styles.value}>{stat.value}</div>
            </div>
            {i < stats.length - 1 && <div style={styles.separator}></div>}
          </React.Fragment>
        ))}
      </div>

      <div style={styles.footerButton}>
        <button style={styles.button}>Voir les commandes de l’entité</button>
      </div>
    </section>
  );
};

export default StatsDisplay;

// Styles en objets JS
const styles = {
  dashboardSection: {
    background: "#ddd",
    padding: "1rem",
    borderRadius: "1rem",
    fontFamily: "system-ui, sans-serif",
    marginBottom: "2rem",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  filters: {
    display: "flex",
  },
  select: {
    marginLeft: "1rem",
    padding: "0.3rem 0.6rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  statsBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "white",
    borderRadius: "1rem",
    padding: "1rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  statBlock: {
    textAlign: "center",
    flex: 1,
  },
  label: {
    fontSize: "1rem",
    marginBottom: "0.3rem",
  },
  value: {
    fontSize: "3rem",
    fontWeight: "bold",
  },
  separator: {
    width: "2px",
    background: "black",
    height: "80px",
    margin: "0 1rem",
    borderRadius: "5px",
  },
  footerButton: {
    textAlign: "center",
    marginTop: "1rem",
  },
  button: {
    backgroundColor: "#444e61",
    color: "white",
    border: "none",
    padding: "0.6rem 1rem",
    borderRadius: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
