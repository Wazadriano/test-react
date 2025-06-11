import React, { useState, useMemo } from "react";
import SearchBar from "../layouts/Components/SearchBar";
import Encart from "../layouts/Components/Encarts";
import BonDeCommande from "../layouts/Components/BonDeCommande";
import MarcheSubsequent from "../layouts/Components/MarcheSubsequent";
import Brouillons from "../layouts/Components/Brouillons";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // données mock
  const commandes = [
    { id: 1, title: "Fournir 100 stylos", delay: "2j 3h", color: "#f8d7da", price: "20 000 €" },
    { id: 2, title: "Réapprovisionnement papier A4", delay: "6j 3h", color: "#d4edda", price: "9 000 €" },
    { id: 3, title: "Maintenance imprimante", delay: "9j 4h", color: "#d4edda", price: "9 000 €" },
  ];
  const marches = [
    { id: 4, title: "Marché fournitures scolaires", delay: "4j 3h", color: "#ffe5b4", price: "9 000 €" },
  ];
  const brouillons = [
    { id: 1, title: "Projet nouveau logo", price: "250 000 €" },
    { id: 2, title: "Refonte site web", price: "1 543 €" },
  ];

  // filtre case-insensitive
  const term = searchTerm.trim().toLowerCase();
  const filtredCommandes = useMemo(
    () =>
      commandes.filter((c) =>
        c.title.toLowerCase().includes(term)
      ),
    [commandes, term]
  );
  const filtredMarches = useMemo(
    () =>
      marches.filter((m) =>
        m.title.toLowerCase().includes(term)
      ),
    [marches, term]
  );
  const filtredBrouillons = useMemo(
    () =>
      brouillons.filter((b) =>
        b.title.toLowerCase().includes(term)
      ),
    [brouillons, term]
  );

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        {/* En-tête */}
        <div style={styles.header}>
          <h1 style={styles.title}>Bienvenue sur Centralis !</h1>
          <button style={styles.addBtn}>+ Créer une commande</button>
        </div>

        {/* Barre de recherche contrôlée */}
        <SearchBar
          value={searchTerm}
          onSearch={(e) => setSearchTerm(e.target.value)}
        />

        {/* Commandes filtrées */}
        <h2 style={styles.sectionTitle}>
          <span style={styles.blueDot} />Commande en cours de consultation :
        </h2>
        <Encart title="Bon de commande" count={filtredCommandes.length}>
          <BonDeCommande commandes={filtredCommandes} />
        </Encart>
        <Encart title="Marché Subséquent" count={filtredMarches.length}>
          <MarcheSubsequent marches={filtredMarches} />
        </Encart>

        {/* Brouillons filtrés */}
        <h2 style={styles.sectionTitle}>
          <span style={styles.yellowDot} />Brouillons :
        </h2>
        <Encart title="Bon de commande" count={filtredBrouillons.length}>
          <Brouillons brouillons={filtredBrouillons} />
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