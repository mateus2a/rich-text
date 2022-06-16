import React from "react";

import Button from "./components/Button";
import EditTable from "./pages/EditTable";

import "./App.css";

function App() {
  // const elements = document.querySelectorAll(".btn");

  // elements.forEach((element) => {
  //   element.addEventListener("click", () => {
  //     const command = element.dataset.element;
  //     console.log(element);
  //     if (command === "createLink" || command === "insertImage") {
  //       document.execCommand(command, false, url);
  //     }
  //     document.execCommand(command, false);
  //   });
  // });

  return (
    <div className="main-content">
      <Button />
      <EditTable />
    </div>
  );
}

export default App;
