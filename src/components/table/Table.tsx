import { Children, cloneElement } from "react";
import styled from "styled-components";

const Container = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  padding: 1em;
  box-shadow: 1px 1px 12px #dfdfdf;
  border-radius: 10px;
  overflow: hidden;
`;

const Header = styled.thead`
  background-color: ${({ theme }) => theme.colors.primary};
  tr {
    th {
      color: ${({ theme }) => theme.colors.light};
    }
  }
`;

const Body = styled.tbody``;

const Tr = styled.tr``;

const Td = styled.td`
  border-bottom: 1px solid #e2e2e2;
  padding: 1.5em;
  padding-left: 2em;
  color: #aaaaaa;
  font-weight: bold;
`;

const Th = styled.th`
  border-bottom: 1px solid #e2e2e2;
  padding: 1.5em;
  padding-left: 2em;
  color: #aaaaaa;
  font-weight: bold;
`;

const Span = styled.span``;

const Table = ({ classes, children, ...restProps }: any) => {
  return (
    <Container className={["table", classes]} {...restProps}>
      {children}
    </Container>
  );
}

export const TableHeader = ({ classes, children, ...restProps }: any) => {
  return (
    <Header className={["table-header", classes]} {...restProps}>
      {children}
    </Header>
  );
}

export const TableBody = ({ classes, children, ...restProps }: any) => {
  return (
    <Body className={["table-body", classes]} {...restProps}>
      {children}
    </Body>
  );
}

export const TableRow = ({ header, classes, children, ...restProps }: any) => {
  if (header)
    return (
      <Tr className={["table-row", classes]} {...restProps}>
        {Children.map(children, (child: any) => (
          <Th>{cloneElement(child)}</Th>
        ))}
      </Tr>
    );
  else
    return (
      <Tr className={["table-row", classes]} {...restProps}>
        {Children.map(children, (child: any) => (
          <Td>{cloneElement(child)}</Td>
        ))}
      </Tr>
    );
}

export const TableCol = ({ classes, children, ...restProps }: any) => {
  return (
    <Span className={["span", classes]} {...restProps}>
      {children}
    </Span>
  );
};

export default Table
