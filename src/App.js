import React from "react";

import Routes from "./routes";
import QuestionProvider from "./contexts/QuestionContext";

function App() {
  return (
    <div className="App">
      <QuestionProvider>
        <Routes />
      </QuestionProvider>
    </div>
  );
}

export default App;
