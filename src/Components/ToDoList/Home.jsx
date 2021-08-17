import React from "react";
import { ToDoList } from "./ToDoList";
import { AddToDoItem } from "./AddTodoItem";
import { Row, Col } from "react-bootstrap";
export const Home = () => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <AddToDoItem />
        </Col>
        <Col>
          <ToDoList />
        </Col>
      </Row>
    </React.Fragment>
  );
};
