import React from "react";
import "./app.scss";
import { Counter } from "./counter";

export const App: React.FC = () => {
  return (
    <main className="App">
      <Counter />
    </main>
  );
};
