import "./InfoPanelcss.css";
import React, { useState } from "react";
function InfoPanel({ title,children }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="info-panel">
      <h1>{title}</h1>
      <button onClick={() => setOpen((v) => !v)}>{open ? "^" : "v"}</button>

      <div className={`InfoPanel-details ${open ? "" : "InfoPanel-details-closed"}`}>{children}</div>
    </section>
  );
}

export default InfoPanel;
