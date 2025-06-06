import React from "react";
import BonDeCommande from "./BonDeCommande";
import MarcheSubsequent from "./MarcheSubsequent";

const Commandes = () => {
  const commandes = [
    { id: 1, title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur", delay: "2j 3h 5m 41s", color: "#f8d7da", price: "20 000 €" },
    { id: 2, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", delay: "6j 3h 5m 41s", color: "#d4edda", price: "9 000 €" },
    { id: 3, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", delay: "9j 4h 15m 4s", color: "#d4edda", price: "9 000 €" },
  ];

  const marche = [
    { id: 4, title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur", delay: "4j 3h 5m 41s", color: "#ffe5b4", price: "9 000 €" },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>
        <span style={styles.blueDot}></span>Commande en cours de consultation:
      </h2>
      <BonDeCommande commandes={commandes} />
      <MarcheSubsequent marches={marche} />
    </section>
  );
};

const styles = {
  section: {
    marginTop: "1.5rem",
  },
  sectionTitle: {
    fontSize: "1.1rem",
    marginBottom: "0.8rem",
    fontWeight: "bold",
  },
  blueDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "#0066ff",
    display: "inline-block",
    marginRight: 8,
  },
};

export default Commandes;
