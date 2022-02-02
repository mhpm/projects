import { Col, Row, Table } from "components/Compounds";

export const TableContainer = () => {
  return (
    <Table classes="customClass">
      <Table.Header>
        <Row header>
          <Col>HEADER</Col>
          <Col>HEADER</Col>
          <Col>HEADER</Col>
          <Col>HEADER</Col>
          <Col>HEADER</Col>
        </Row>
      </Table.Header>
      <Table.Body>
        <Row classes="customClass">
          <Col>data 1</Col>
          <Col>data 2</Col>
          <Col>data 3</Col>
          <Col>data 4</Col>
          <Col classes="customClass">data 5</Col>
        </Row>
        <Row>
          <Col>data 1</Col>
          <Col>data 2</Col>
          <Col>data 3</Col>
          <Col>data 4</Col>
          <Col>data 5</Col>
        </Row>
        <Row>
          <Col>data 1</Col>
          <Col>data 2</Col>
          <Col>data 3</Col>
          <Col>data 4</Col>
          <Col>data 5</Col>
        </Row>
        <Row>
          <Col>data 1</Col>
          <Col>data 2</Col>
          <Col>data 3</Col>
          <Col>data 4</Col>
          <Col>data 5</Col>
        </Row>
      </Table.Body>
    </Table>
  );
};
