import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBitcoin } from "react-icons/fa";
import { Nav, Icon, Title, Links, List, ListItem } from "./styled";

const navBarComponent = () => {
  const [signIn, setSignIn] = useState(false);

  useEffect(() => {
    if (window.location.href !== "http://localhost:3000/" || window.location.href !== "https://jared-crypto.netlify.app/") {
      setSignIn(true);
    }
  }, [signIn]);

  return (
    <Nav>
      <Icon>
        <Link href="/">
          <div >
            <FaBitcoin />
          </div>
        </Link>
      </Icon>
      <Title  href="/"><h3>Coin Guide</h3></Title>
      <Links>
        <List>
          {signIn && (
            <ListItem>
              <Link href="/">Return</Link>
            </ListItem>
          )}
        </List>
      </Links>
    </Nav>
  );
};

export default navBarComponent;
