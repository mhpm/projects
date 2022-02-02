import { Children, cloneElement } from "react";
import styled from "styled-components";

const TableContainer = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  padding: 1em;
  box-shadow: 1px 1px 12px #dfdfdf;
  border-radius: 10px;
  overflow: hidden;
`;

const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.colors.primary};
  tr {
    th {
      color: ${({ theme }) => theme.colors.light};
    }
  }
`;

const TableBody = styled.tbody``;

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

function Table({ classes, children, ...restProps }: any) {
  return (
    <TableContainer className={["table", classes]} {...restProps}>
      {children}
    </TableContainer>
  );
}

function Header({ classes, children, ...restProps }: any) {
  return (
    <TableHeader className={["table-header", classes]} {...restProps}>
      {children}
    </TableHeader>
  );
}

function Body({ classes, children, ...restProps }: any) {
  return (
    <TableBody className={["table-body", classes]} {...restProps}>
      {children}
    </TableBody>
  );
}

function Row({ header, classes, children, ...restProps }: any) {
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

const Col = ({ classes, children, ...restProps }: any) => {
  return (
    <Span className={["span", classes]} {...restProps}>
      {children}
    </Span>
  );
};

Table.Header = Header;
Table.Body = Body;

export { Table, Row, Col };
