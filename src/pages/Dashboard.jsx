import React from "react";

// Simule les données selon le rôle
const getDashboardData = (role) => {
  if (role === "admin") {
    return {
      commandes: [1, 2, 3, 5, 0],
      notifications: 4,
      historique: [
        { id: 1, text: "Commande N°3456ZE45 validée", source: "Sodeka Menuiserie", time: "16h00" },
        { id: 2, text: "Commentaire ajouté sur la commande N°341589324", source: "Sodeka Plomberie", time: "15h30" },
        { id: 3, text: "Commande N°3582RI90F créée en brouillon", source: "Sodeka Électricité", time: "14h12" }
      ]
    };
  }

  // role "user"
  return {
    commandes: [0, 1, 1, 2, 0],
    notifications: 1,
    historique: [
      { id: 1, text: "Commande N°1234 ajoutée", source: "User Team", time: "10h00" }
    ]
  };
};

const Dashboard = () => {
  const role = "admin"; // À remplacer par useAuth() plus tard
  const { commandes, notifications, historique } = getDashboardData(role);

  return (
    <div className="dashboard">
      <h1>Bienvenue sur Centralis !</h1>

      <div className="entity-container">
        <h2>Entité</h2>
        <div className="status-grid">
          <div><span>Brouillons</span><strong>{commandes[0]}</strong></div>
          <div><span>En attente</span><strong>{commandes[1]}</strong></div>
          <div><span>À valider</span><strong>{commandes[2]}</strong></div>
          <div><span>Accepté</span><strong>{commandes[3]}</strong></div>
          <div><span>Refusé</span><strong>{commandes[4]}</strong></div>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="notifications-box">
          <h3>Notifications <span className="notif-badge">{notifications}</span></h3>
          <ul>
            {Array(notifications).fill().map((_, i) => (
              <li key={i}>Notification {i + 1} <button>×</button></li>
            ))}
          </ul>
        </div>

        <div className="historique-box">
          <h3>Historique</h3>
          {historique.map((entry) => (
            <div key={entry.id} className="historique-item">
              <strong>{entry.text}</strong>
              <br />
              <small>{entry.source}, {entry.time}</small>
            </div>
          ))}
          <button className="btn-see-all">Voir tout l’historique</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
