
import React from "react";
import WeddingCountdown from "./components/WeddingCountDown";
import Abstract from "./components/Abstract";
import Program from "./components/Program";

function App() {
    return (
      <div className="app">
        <div className="all">
          <Abstract/>
          <WeddingCountdown />
          <Program/>
        </div>
      </div>
    );
  
}

export default App;
