import React, { useState } from "react";
import Link from "next/link";
import { FaBitcoin } from "react-icons/fa";
import { Nav, Icon, Title, Links, List, ListItem } from "./styled";

const navBarComponent = () => {
  const [signIn, setSignIn] = useState(false);
  const handleSignIn = () => setSignIn(!signIn);

  return (
    <Nav>
      <Icon>
        <Link href="/">
          <div><FaBitcoin /></div>
        </Link>
      </Icon>
      <Title href="/">Coin Guide</Title>
      <Links>
        <List>
          {signIn && <ListItem>Profile</ListItem>}
          <ListItem onClick={handleSignIn}>
            {!signIn ? "Sign In" : "Sign Out"}
          </ListItem>
        </List>
      </Links>
    </Nav>
  );
};

export default navBarComponent;
