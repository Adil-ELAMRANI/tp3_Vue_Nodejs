🌍 Agence Voyages – Application Web Fullstack
Application complète de gestion de forfaits touristiques avec Vue.js (frontend) et Node.js/Express (backend), connectée à une base de données MySQL.

🚀 Stack Technique
Frontend : Vue.js 3, TailwindCSS

Backend : Node.js, Express, Sequelize

Base de données : MySQL

📁 Structure du Projet

tp3_Vue_Nodejs/
│
├── agence-voyages-vue/      # Frontend Vue.js
│   └── src/
│       ├── views/
│       └── components/
│   └── package.json
│
└── server/                  # Backend Node.js/Express
    └── app/
        ├── controllers/
        ├── models/
        └── routes/
    └── server.js
    └── package.json
⚙️ Installation
Prérequis
Node.js 18+

npm

MySQL

1️⃣ Cloner le dépôt & Créer la base de données

git clone https://github.com/ton-utilisateur/tp3_Vue_Nodejs.git
Créer la base et la table :

CREATE DATABASE tp3voyages CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE tp3voyages;

CREATE TABLE forfaits (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price FLOAT,
  photo VARCHAR(255),
  category VARCHAR(100)
);

2️⃣ Installation du Backend

cd tp3_Vue_Nodejs/server
npm install
Configurer la connexion dans app/config/db.config.js :

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "votre_mot_de_passe",
  DB: "tp3voyages",
  dialect: "mysql"
};
Démarrer le serveur :

npm start
🟢 Serveur sur http://localhost:8080

3️⃣ Installation du Frontend

cd ../agence-voyages-vue
npm install
npm run serve
🟢 Application sur http://localhost:8081

✨ Fonctionnalités
Ajouter de nouveaux forfaits touristiques

Voir la liste complète

Modifier ou supprimer les forfaits

Filtrer par catégories

Interface responsive & moderne

🔗 API Endpoints (Backend)
Méthode	Endpoint	Description
GET	/api/forfaits	Récupère tous les forfaits
POST	/api/forfaits	Crée un nouveau forfait
PUT	/api/forfaits/:id	Met à jour un forfait
DELETE	/api/forfaits/:id	Supprime un forfait

👤 Auteur
Adil Mostapha El Amrani
2025 – Tous droits réservés

📝 Licence
Ce projet est open-source à but éducatif.
