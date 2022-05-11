import styled from "styled-components";

export const Container = styled.ul`
  background-color: #1ea7fd;
  padding: 2em;
  list-style: none;
`;

export const ItemContainer = styled.li`
  padding: 1em;
  border: 2px solid white;
  border-radius: 1em;
  margin-bottom: 1em;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
`;

export const ItemCheckbox = styled.input`
  margin-right: 10px;
  -webkit-transform: scale(1.5); /* Chrome, Safari, Opera */
  transform: scale(1.5);
`;
