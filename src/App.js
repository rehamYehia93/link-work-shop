// src/App.js
import React from "react";
import "./App.scss"; // Import your global Sass file
import AppRouter from "./AppRouter";
import Layout from "./views/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <AppRouter />
      </Layout>
    </div>
  );
}

export default App;
