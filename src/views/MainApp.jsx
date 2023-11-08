import React from "react";
import PageUser from "./PageUser";
import Encabezado from "../components/encabezado";

function MainApp() {
  return (
    <div className="bg-mint">
      <Encabezado />
      <PageUser />
    </div>
  );
}

export default MainApp;
