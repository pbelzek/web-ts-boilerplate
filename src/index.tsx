import React from "react";
import { render } from "react-dom";
import { App } from "./app/app";
import "./styles/global.scss";

const reactRoot = document.getElementById("react-root");

render(<App />, reactRoot);
