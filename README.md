# AgenceBank — API & Front-end pour une banque (projet de formation)

[![CI](https://img.shields.io/badge/CI-passing-brightgreen)]() [![Licence](https://img.shields.io/badge/Licence-MIT-blue)]() [![Coverage](https://img.shields.io/badge/Coverage-%5Binfo%5D-lightgrey)]()

> Projet réalisé dans le cadre de la formation **Développeur d'application - JavaScript React** (OpenClassrooms).  
> **Objectif général :** implémenter un front-end React et une API Node/Mongo pour un service bancaire minimal (auth, comptes, transactions).

## 📚 Table des matières
- [Description](#-description)
- [Objectifs pédagogiques](#-objectifs-p%C3%A9dagogiques)
- [Compétences & Preuves](#-comp%C3%A9tences--preuves)
- [Stack & Versions](#-stack--versions)
- [Structure du projet](#-structure-du-projet)
- [Fonctionnalités clés](#-fonctionnalit%C3%A9s-cl%C3%A9s)
- [API & Données](#-api--donn%C3%A9es)
- [Installation & Lancement](#-installation--lancement)
- [Available Scripts](#available-scripts)
- [Tests](#-tests)
- [Démo & Captures](#-d%C3%A9mo--captures)
- [Roadmap](#-roadmap)
- [Licence](#-licence)
- [Contact](#-contact)
- [English version](#english-version)

---

## 🚀 Description
Application de démonstration « Argent Bank » composée d’un **frontend** React (Create React App) et d’un **backend** Node.js + MongoDB exposant une API REST (auth, comptes, transactions). Cible : recruteurs techniques souhaitant vérifier des compétences full-stack. :contentReference[oaicite:0]{index=0}

> **Résultats clés** : front React fonctionnel • backend Node/Mongo avec scripts de peuplement • documentation API disponible via Swagger.

## 🎯 Objectifs pédagogiques
- Initialiser et configurer une application React (Create React App).  
- Implémenter une API REST (Express / Node.js).  
- Gérer l’authentification et la persistance (MongoDB).  
- Fournir scripts de peuplement de la base (seed DB) et de démarrage.  
- Produire une documentation technique exploitable pour la soutenance.

## 🧠 Compétences & Preuves
| Exigence pédagogique | Compétence recrutée | Mise en œuvre | Preuves |
|---|---|---|---|
| Front React | **React (CRA)** | SPA, routing, composants réutilisables | dossier `frontend/` et README frontend. :contentReference[oaicite:1]{index=1} |
| API REST | **Node.js / Express** | Endpoints : auth / accounts / transactions | dossier `backend/` et README backend. :contentReference[oaicite:2]{index=2} |
| Persistance | **MongoDB** | Script de peuplement (seed DB) | commande `npm run populate-db` (backend). :contentReference[oaicite:3]{index=3} |
| Dev / Tests | **Scripts & API doc** | Scripts de dev/build/test et Swagger `/api-docs` | Scripts listés ci-dessous ; Swagger disponible quand le serveur tourne. :contentReference[oaicite:4]{index=4} |

## 🧰 Stack & Versions
| Tech | Rôle |
|---|---|
| React (Create React App) | Frontend UI |
| Node.js **v12** | Runtime backend |
| MongoDB Community Server | Base de données |
| npm / yarn | Gestionnaire de paquets |

(Consulter les `package.json` dans `frontend/` et `backend/` pour les versions exactes.) :contentReference[oaicite:5]{index=5}

## 🗂️ Structure du projet
```txt
/ (root)
├─ frontend/         # Create React App (UI)
├─ backend/          # Node + Express + scripts (populate-db)
├─ designs/          # assets & wireframes
└─ README.md
```
Consulter les README des sous-dossiers pour l’arborescence complète. :contentReference[oaicite:6]{index=6}

## ✅ Fonctionnalités clés
* Authentification utilisateur (login).  
* Consultation des comptes et soldes.  
* Création et consultation de transactions.  
* Seed DB pour tests locaux.  
* Documentation API (Swagger).

## 🔌 API & Données
* **Base URL (dev)** : `http://localhost:3001` (exemple).  
* **Endpoints principaux** :
  * `POST /api/auth/login` — authentification utilisateur  
  * `GET /api/users/:id/accounts` — liste des comptes utilisateur  
  * `POST /api/transactions` — créer une transaction  
* **Documentation** : Swagger disponible sur `/api-docs` lorsque le backend est lancé.  
* **Schéma de donnée (extrait)** :
```json
{ "userId":"string", "accounts":[{ "id":"string", "balance":"number" }], "transaction":{ "amount":"number" } }
```
(Documentation complète dans Swagger.) :contentReference[oaicite:7]{index=7}

## ⚡ Installation & Lancement
```bash
# 1) Cloner
git clone https://github.com/devchon2/AgenceBank.git
cd AgenceBank

# 2) Backend
cd backend
npm install
# Si présent : copier .env.example en .env et remplir les variables requises
npm run dev:server

# (optionnel) Peupler la base
npm run populate-db

# 3) Frontend (nouveau terminal)
cd ../frontend
npm install
npm start
```
Lorsque le backend tourne, la documentation Swagger est disponible sur `/api-docs`. :contentReference[oaicite:8]{index=8}

## 📜 Available Scripts
```bash
# FRONTEND (Create React App)
yarn start
yarn test
yarn build
yarn eject

# BACKEND
npm install
npm run dev:server
npm run populate-db
```

## 🧪 Tests
* Frontend : `yarn test` (Create React App).  
* Backend : tests unitaires et d’intégration (Jest) — voir dossier `__tests__`.  
* Rapports de couverture : config Jest et rapports disponibles dans le projet. :contentReference[oaicite:9]{index=9}

## 🎥 Démo & Captures
* Lancer le backend et ouvrir `http://localhost:3001/api-docs` pour la doc interactive.  
* Assets / wireframes : dossier `designs/` (captures et wireframes). :contentReference[oaicite:10]{index=10}

## 🗺️ Roadmap
* Intégration CI (GitHub Actions) + badge coverage.  
* Tests E2E (Cypress).  
* Durcissement JWT / sécurité pour production.

## 📝 Licence
MIT — voir le fichier `LICENSE` à la racine du dépôt. :contentReference[oaicite:11]{index=11}

## 📫 Contact
Rachid Chon — `cgpt1euro@rchon-dev.fr` — https://github.com/devchon2/

---

## English version

<details>
<summary>🇬🇧 Click to expand</summary>

# AgenceBank — API & Front-end for a bank (training project)

[![CI](https://img.shields.io/badge/CI-passing-brightgreen)]() [![License](https://img.shields.io/badge/License-MIT-blue)]() [![Coverage](https://img.shields.io/badge/Coverage-%5Binfo%5D-lightgrey)]()

> Built during the **Développeur d'application - JavaScript React** training (OpenClassrooms).  
> **Goal:** implement a React frontend and a Node/Mongo API for a minimal secure banking service (authentication, accounts, transactions).

## 🚀 Description
Demo application “Argent Bank”: React frontend (Create React App) and Node.js + MongoDB backend exposing a REST API for authentication, accounts and transactions. Target: technical recruiters evaluating full-stack skills. :contentReference[oaicite:12]{index=12}

> **Key outcomes**: working React frontend • Node/Mongo backend with seed scripts • interactive API docs via Swagger.

## 🎯 Learning objectives
- Initialize and configure a React app (Create React App).  
- Implement a REST API (Express / Node.js).  
- Manage authentication and persistence (MongoDB).  
- Provide seed DB and startup scripts.  
- Produce technical documentation for a review / defense.

## 🧠 Skills & Evidence
| Requirement | Skill demonstrated | Implementation | Evidence |
|---|---|---|---|
| Frontend | **React (CRA)** | SPA, routing, reusable components | `frontend/` and its README. :contentReference[oaicite:13]{index=13} |
| API | **Node.js / Express** | Auth / accounts / transactions endpoints | `backend/` and its README. :contentReference[oaicite:14]{index=14} |
| Persistence | **MongoDB** | Seed DB via `populate-db` script | `npm run populate-db`. :contentReference[oaicite:15]{index=15} |
| Dev/Test | **Scripts & Swagger** | Dev/build/test scripts and API docs | scripts listed below • `/api-docs`. :contentReference[oaicite:16]{index=16} |

## 🧰 Stack & Versions
| Tech | Role |
|---|---|
| React (Create React App) | Frontend UI |
| Node.js **v12** | Backend runtime |
| MongoDB Community Server | Database |
| npm / yarn | Package manager |

(Exact versions in `package.json` files.) :contentReference[oaicite:17]{index=17}

## 🗂 Project structure
```txt
/ (root)
├─ frontend/         # Create React App
├─ backend/          # Node + Express + scripts (populate-db)
├─ designs/          # assets & wireframes
└─ README.md
```
See subfolder READMEs for full trees. :contentReference[oaicite:18]{index=18}

## ✅ Key features
* User authentication (login).  
* Account listing & balances.  
* Create and list transactions.  
* DB seeding and Swagger documentation.

## 🔌 API & Data
* **Dev base URL**: `http://localhost:3001` (example).  
* **Main endpoints**:
  * `POST /api/auth/login` — authenticate user  
  * `GET /api/users/:id/accounts` — list user accounts  
  * `POST /api/transactions` — create transaction  
* **Swagger**: `/api-docs` (when backend runs).  
* **Example schema**:
```json
{ "userId":"string", "accounts":[{ "id":"string","balance":"number" }], "transaction":{ "amount":"number" } }
```
(Detailed docs via Swagger.) :contentReference[oaicite:19]{index=19}

## ⚡ Setup & Run
```bash
git clone https://github.com/devchon2/AgenceBank.git
cd AgenceBank

# Backend
cd backend
npm install
# if present: copy .env.example -> .env and fill required values
npm run dev:server
npm run populate-db   # optional: seed DB

# Frontend
cd ../frontend
npm install
npm start
```
Swagger UI available at `/api-docs` when the backend is running. :contentReference[oaicite:20]{index=20}

## 📜 Available Scripts
```bash
# FRONTEND
yarn start
yarn test
yarn build
yarn eject

# BACKEND
npm install
npm run dev:server
npm run populate-db
```

## 🧪 Tests
* Frontend: `yarn test`.  
* Backend: unit & integration tests (Jest) in `__tests__`.  
* Coverage: Jest configs and reports in the repo. :contentReference[oaicite:21]{index=21}

## 🎥 Demo & Screenshots
* API docs: `http://localhost:3001/api-docs`.  
* Design assets: `designs/`. :contentReference[oaicite:22]{index=22}

## 🗺 Roadmap
* Add CI (GitHub Actions) + coverage badge.  
* Add E2E (Cypress).  
* Harden JWT/security for production.

## 📝 License
MIT — see `LICENSE`. :contentReference[oaicite:23]{index=23}

## 📫 Contact
Rachid Chon — `cgpt1euro@rchon-dev.fr` — https://github.com/devchon2/

</details>
