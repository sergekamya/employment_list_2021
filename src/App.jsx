import React, { Component } from "react";
import EmployeeList from "./components/EmployeeList";

export class App extends Component {
  render() {
    return (
      <div>
        <h1 id="header">Employee management</h1>
        <EmployeeList />{" "}
      </div>
    );
  }
}

export default App;
