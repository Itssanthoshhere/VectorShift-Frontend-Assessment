
<div align="center">

<!-- Tech Stack Badges -->

<div>
<img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/-React%20Flow-FF6B6B?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/-Zustand-000000?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white"/>
<img src="https://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
<img src="https://img.shields.io/badge/-Create%20React%20App-09D3AC?style=for-the-badge&logo=react&logoColor=white"/>
</div>

<h3>🔗 VectorShift – Visual AI Pipeline Builder</h3>

<b>Frontend Technical Assessment for VectorShift</b>

A **visual pipeline editor** that allows users to build directed graphs using drag-and-drop nodes, connect them into pipelines, and submit them to a backend service for structural analysis.

Built with **React + React Flow + Zustand** for the frontend and **FastAPI** for backend pipeline analysis.

<br/>

</div>

---

# 📋 Table of Contents

- [📋 Table of Contents](#-table-of-contents)
- [✨ Introduction](#-introduction)
- [⚙️ Tech Stack](#️-tech-stack)
  - [💻 Frontend](#-frontend)
  - [🧠 Backend](#-backend)
- [🔋 Core Features](#-core-features)
    - [🧩 Node Abstraction System](#-node-abstraction-system)
    - [🎨 Unified Styling](#-unified-styling)
    - [✏️ Dynamic Text Node](#️-dynamic-text-node)
    - [🔗 Drag-and-Drop Pipeline Builder](#-drag-and-drop-pipeline-builder)
    - [🚀 Backend Pipeline Analysis](#-backend-pipeline-analysis)
- [🤸 Quick Start](#-quick-start)
  - [Prerequisites](#prerequisites)
  - [1️⃣ Clone the Repository](#1️⃣-clone-the-repository)
  - [2️⃣ Start Backend](#2️⃣-start-backend)
  - [3️⃣ Start Frontend](#3️⃣-start-frontend)
- [🧱 Project Structure](#-project-structure)
- [📊 Application Flow](#-application-flow)
    - [Building Pipelines](#building-pipelines)
    - [Pipeline Submission](#pipeline-submission)
- [🧠 Architecture Overview](#-architecture-overview)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [🚀 Future Enhancements](#-future-enhancements)
- [🤝 Contribution](#-contribution)
- [🔗 Contact](#-contact)

---

# ✨ Introduction

This project is a **visual pipeline builder** inspired by node-based workflow tools.

Users can:

• Drag nodes from a toolbar  
• Build pipelines on a visual canvas  
• Connect nodes using edges  
• Add dynamic variables inside text nodes  
• Submit the pipeline to a backend service for validation

The backend analyzes the pipeline and returns:

- Number of nodes
- Number of edges
- Whether the graph is a **Directed Acyclic Graph (DAG)**

This project demonstrates **frontend architecture, component abstraction, dynamic UI behavior, and backend integration**.

---

# ⚙️ Tech Stack

## 💻 Frontend

- **React 18** – UI library
- **React Flow** – Node-based graph rendering
- **Zustand** – Lightweight global state management
- **Create React App (CRA)** – Project scaffolding
- **JavaScript (ES6)** – Application logic
- **CSS** – Styling

## 🧠 Backend

- **FastAPI** – Python backend framework
- **Python** – Backend logic
- **Uvicorn** – ASGI server for FastAPI

---

# 🔋 Core Features

### 🧩 Node Abstraction System

A reusable **BaseNode component** enables easy creation of new node types without duplicating layout or styling.

Supported nodes include:

- Input Node
- LLM Node
- Output Node
- Text Node
- Math Node
- API Node
- Delay Node
- Filter Node
- Condition Node

---

### 🎨 Unified Styling

A consistent **dark UI theme** across:

- Nodes
- Toolbar
- Canvas
- Submit controls

Ensures visual clarity and maintainability.

---

### ✏️ Dynamic Text Node

Text nodes support:
```

Hello {{user}} your order {{order_id}} is ready

```

The system automatically:

- Parses variables
- Creates corresponding **input handles**
- Positions handles dynamically
- Auto-resizes the text area based on content

---

### 🔗 Drag-and-Drop Pipeline Builder

Using **React Flow**, users can:

- Drag nodes onto the canvas
- Connect nodes with edges
- Move and organize pipelines visually

---

### 🚀 Backend Pipeline Analysis

The pipeline can be submitted to the backend where it calculates:

```

num_nodes
num_edges
is_dag

```

Example result:

```

Nodes: 4
Edges: 3
Is DAG: true

````

The result is displayed via a frontend alert.

---

# 🤸 Quick Start

## Prerequisites

Make sure you have installed:

- Node.js
- npm
- Python 3
- pip

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Itssanthoshhere/VectorShift-Frontend-Assessment.git
cd VectorShift-Frontend-Assessment
````

---

## 2️⃣ Start Backend

```bash
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload
```

Backend runs on:

```
http://localhost:8000
```

API Docs:

```
http://localhost:8000/docs
```

---

## 3️⃣ Start Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

# 🧱 Project Structure

```
frontend/
│
├── public/
│   └── index.html
│
├── src/
│   ├── nodes/
│   │   ├── BaseNode.js
│   │   ├── inputNode.js
│   │   ├── llmNode.js
│   │   ├── outputNode.js
│   │   ├── textNode.js
│   │   ├── mathNode.js
│   │   ├── apiNode.js
│   │   ├── delayNode.js
│   │   ├── filterNode.js
│   │   └── conditionNode.js
│   │
│   ├── draggableNode.js
│   ├── toolbar.js
│   ├── ui.js
│   ├── submit.js
│   ├── store.js
│   ├── App.js
│   └── index.js
│
└── backend/
    └── main.py
```

---

# 📊 Application Flow

### Building Pipelines

```
Toolbar
   ↓
Drag Node
   ↓
React Flow Canvas
   ↓
Nodes + Edges stored in Zustand
```

### Pipeline Submission

```
Submit Button
      ↓
Send nodes + edges
      ↓
FastAPI Backend
      ↓
Pipeline Analysis
      ↓
Return result
      ↓
Frontend Alert
```

---

# 🧠 Architecture Overview

## Frontend

Built using **React Flow** for graph rendering and **Zustand** for centralized state management.

Key responsibilities:

- Drag-and-drop pipeline creation
- Node rendering
- Edge connection handling
- Dynamic node behavior
- Backend API interaction

---

## Backend

FastAPI service responsible for:

- Receiving pipeline structure
- Counting nodes and edges
- Checking if graph is a **Directed Acyclic Graph**
- Returning analysis results

---

# 🚀 Future Enhancements

Potential improvements include:

- Node configuration panels
- Pipeline persistence (database)
- Graph validation before submission
- Export/import pipeline JSON
- Real-time pipeline execution
- Visual DAG validation indicators
- Improved node styling system

---

# 🤝 Contribution

This project was developed as part of a **technical assessment**.

However contributions are welcome.

Steps:

```
1. Fork repository
2. Create feature branch
3. Commit changes
4. Submit pull request
```

---

# 🔗 Contact

GitHub: [<b>Itssanthoshhere</b>](https://github.com/Itssanthoshhere) <br/>
LinkedIn: [<b>Santhosh VS</b>](https://www.linkedin.com/in/thesanthoshvs/)

---

⭐ If you like this project, consider giving it a **star on GitHub**.

---