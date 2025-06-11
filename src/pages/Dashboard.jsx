import React from "react";
import SearchBar from "../layouts/Components/SearchBar";
import Encart from "../layouts/Components/Encarts";
import BonDeCommande from "../layouts/Components/BonDeCommande";
import MarcheSubsequent from "../layouts/Components/MarcheSubsequent";
import Brouillons from "../layouts/Components/Brouillons";

const Dashboard = () => {
  const commandes = [
    { id: 1, title: "...", delay: "2j 3h 5m 41s", color: "#f8d7da", price: "20 000 €" },
    { id: 2, title: "...", delay: "6j 3h 5m 41s", color: "#d4edda", price: "9 000 €" },
    { id: 3, title: "...", delay: "9j 4h 15m 4s", color: "#d4edda", price: "9 000 €" },
  ];
  const marches = [
    { id: 4, title: "...", delay: "4j 3h 5m 41s", color: "#ffe5b4", price: "9 000 €" },
  ];
  const brouillons = [
    { id: 1, title: "...", price: "250 000 €" },
    { id: 2, title: "...", price: "1 543 €" },
  ];

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        {/* En-tête */}
        <div style={styles.header}>
          <h1 style={styles.title}>Bienvenue sur Centralis !</h1>
          <button style={styles.addBtn}>+ Créer une commande</button>
        </div>

        {/* Barre de recherche */}
        <SearchBar />

        {/* Commandes en consultation */}
        <h2 style={styles.sectionTitle}>
          <span style={styles.blueDot} />Commande en cours de consultation :
        </h2>
          <Encart title="Bon de commande" count={commandes.length}>
            <BonDeCommande commandes={commandes} />
          </Encart>
          <Encart title="Marché Subséquent" count={marches.length}>
            <MarcheSubsequent marches={marches} />
          </Encart>

        <h2 style={styles.sectionTitle}>
          <span style={styles.yellowDot} />Brouillons :
        </h2>
          <Encart title="Bon de commande">
            <Brouillons brouillons={brouillons} />
          </Encart>

      </div>
    </main>
  );
};

const styles = {
  main: {
    marginLeft: "250px",
    padding: "2rem",
    boxSizing: "border-box",
    transition: "margin-left 0.3s ease",
  },
  container: {
    maxWidth: "100%",
    fontFamily: "system-ui, sans-serif",
    color: "#333",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },

  addBtn: {
    backgroundColor: "#dd7025",
    color: "white",
    border: "none",
    borderRadius: "2rem",
    padding: "0.8rem 1.4rem",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
  },
  sectionTitle: {
    fontSize: "2rem",
    margin: "1.5rem 0 0.8rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  blueDot: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    backgroundColor: "#0066ff",
    display: "inline-block",
  },
  yellowDot: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    backgroundColor: "#ffcc00",
    display: "inline-block",
  },
};

export default Dashboard;