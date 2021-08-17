import styled from 'styled-components'

export const Nav = styled.div`
  display: flex;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  justify-content: flex-start;
  align-items: center;
  height: 4rem;
  border-bottom: 0.5px solid #000;
  background: #000046;
  background: -webkit-linear-gradient(to right, #1cb5e0, #000046);
  background: linear-gradient(to right, #1cb5e0, #000046);

`

export const Icon = styled.div`
  margin-left: 1rem;
  margin-right: 0.5rem;
  font-size: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5%;

  @media (min-width: 768px) {
      margin-left: 25%;
  }
`

export const Title = styled.div`
display: flex;
  flex: 1;
  color: #fff;


`

export const Links = styled.div`
  display: flex;
  flex: 2;
  justify-content: flex-end;
  margin-right: 5%;

  @media (min-width: 768px) {
      margin-right: 25%;
  }
`

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-items: center;
`

export const ListItem = styled.li`
  margin: 0rem 1rem;
  color: #fff;
`