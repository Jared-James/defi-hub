import React from "react";
import styled from "styled-components";
import numeral from "numeral";

const Container = styled.div`
  width: 100%;
`;

const CoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: orange;
  width: 1200px;
  margin: 0 auto;
`;

const HeadlineContainer = styled.div`
  display: flex;
`;

const CoinInformation = styled.div`
  margin: 0 1rem;
  padding: 1rem 0;
`;

const Title = styled.div`
  font-size: 1rem;
`;

const ApiResponse = styled.div`
  font-size: 1.5rem;
`;

const IndividalBody = ({ coin }) => {
  return (
    <Container>
      <HeadlineContainer>
        <CoinInformation>
          <Title>Current Price:</Title>{" "}
          <ApiResponse>
            {numeral(coin.market_data.current_price.nzd).format("$0,0.00")}
          </ApiResponse>
        </CoinInformation>
        <CoinInformation>
          <Title>24 Hour % change:</Title>{" "}
          <ApiResponse>{`${coin.market_data.price_change_percentage_24h_in_currency.nzd.toFixed(
            2
          )}%`}</ApiResponse>
        </CoinInformation>
        <CoinInformation>
          <Title>Market Cap:</Title>{" "}
          <ApiResponse>
            {numeral(coin.market_data.market_cap.nzd)
              .format("0.000 a")
              .toUpperCase()}
          </ApiResponse>
        </CoinInformation>
        <CoinInformation>
          <Title>Volume:</Title>{" "}
          <ApiResponse>
            {numeral(coin.market_data.total_volume.nzd)
              .format("0.000 a")
              .toUpperCase()}
          </ApiResponse>
        </CoinInformation>
      </HeadlineContainer>
    </Container>
  );
};

export default IndividalBody;
