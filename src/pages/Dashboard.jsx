import React from "react";
import SearchBar from "../layouts/Components/SearchBar";
import Commandes from "../layouts/Components/Commandes";
import Brouillons from "../layouts/Components/Brouillons";

const Dashboard = () => {
  const brouillons = [
    { id: 1, title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur", price: "250 000 €" },
    { id: 2, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: "1 543 €" },
  ];

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.title}>Bienvenue sur Centralis !</h1>
        <SearchBar />
        <Commandes />
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.yellowDot}></span> <strong>Brouillons :</strong>
          </h2>
          <Brouillons brouillons={brouillons} />
        </section>
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
  title: {
    marginBottom: "1rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  section: {
    marginTop: "1.5rem",
  },
  sectionTitle: {
    fontSize: "1.1rem",
    marginBottom: "0.8rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  yellowDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "#ffcc00",
    display: "inline-block",
  },
  // Responsive style
  "@media (max-width: 768px)": {
    main: {
      marginLeft: "70px",
      padding: "1rem",
    },
  },
};

export default Dashboard;
