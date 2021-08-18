import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBitcoin } from "react-icons/fa";
import { Nav, Icon, Title, Links, List, ListItem } from "./styled";

const navBarComponent = () => {
  const [signIn, setSignIn] = useState(false);

  useEffect(() => {
    if (window.location.href !== "http://localhost:3000/") {
      setSignIn(true);
    }
  }, [signIn]);

  return (
    <Nav>
      <Icon>
        <Link href="/">
          <div>
            <FaBitcoin />
          </div>
        </Link>
      </Icon>
      <Title href="/">Coin Guide</Title>
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
