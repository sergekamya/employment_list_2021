import React, { Component } from "react";
import EmployeeList from "./components/EmployeeList";
import { Container, Header } from "semantic-ui-react";

export class App extends Component {
  render() {
    return (
      <Container>
        <Header size="huge" id="header"> Employee management</Header>
        <EmployeeList />{" "}
      </Container>
    );
  }
}

export default App;
