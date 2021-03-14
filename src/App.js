import React from "react";
import ChildComponent from "./ChildComponent";

function App() {
  return (
    <div>
      <ChildComponent
        /*objValue={{ name: "Neo", age: 34 }} */
        objValue={{ age: 34 }}
        requiredStringValue="Monster"
      >
        <p>Neo</p>
        <p>34</p>
      </ChildComponent>
    </div>
  );
}

export default App;
