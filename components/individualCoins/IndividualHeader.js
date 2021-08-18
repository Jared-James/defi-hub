import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: pink;
  display: flex;
  width: 100%;
  padding: 1rem 0;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 0 auto;
`;

const CoinInformationLogo = styled.div`
  margin: 0 0.5rem;
`;

const CoinInformationName = styled.h3`
  font-size: 2rem;
  margin: 0 1rem;
`;

const CoinInformationSymbol = styled.div`
  font-size: 1.5rem;
  margin: 0 1rem;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  flex-wrap: wrap;
`;

const CoinInformationGenesis = styled.p`
  font-size: 0.9rem;
`;

const CoinInformationMarketRank = styled.p`
  font-size: 0.9rem;
`;

const IndividualHeader = ({ coin }) => {
  return (
    <Container>
      <InnerContainer>
        <LeftSide>
          <CoinInformationLogo>
            <img src={coin.image.small} />
          </CoinInformationLogo>
          <CoinInformationName>{coin.name.toUpperCase()}</CoinInformationName>
          <CoinInformationSymbol>
            {coin.symbol.toUpperCase()}
          </CoinInformationSymbol>
        </LeftSide>

        <RightSide>
          <CoinInformationGenesis>
            GENESIS DATE {coin.genesis_date}
          </CoinInformationGenesis>
          <CoinInformationMarketRank>
            MARKET CAP RANK: {coin.market_cap_rank}
          </CoinInformationMarketRank>
        </RightSide>
      </InnerContainer>
    </Container>
  );
};

export default IndividualHeader;
