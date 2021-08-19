import styled from "styled-components";
import Link from "next/link";

export const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 4rem;
  background: #f8f8f8;

`;

export const Icon = styled.div`
  margin-left: 1rem;
  margin-right: 0.5rem;
  font-size: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5%;

  cursor: pointer;
  @media (min-width: 768px) {
    margin-left: 25%;
  }
`;

export const Title = styled(Link)`
  display: flex;
  flex: 1;
  color: #000;
  cursor: pointer;
  font-weight: "bold";
`;

export const Links = styled.div`
  display: flex;
  flex: 2;
  justify-content: flex-end;
  margin-right: 5%;

  @media (min-width: 768px) {
    margin-right: 25%;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  margin: 0rem 1rem;
  color: #000;
  border: 1.3px solid #000;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
`;
