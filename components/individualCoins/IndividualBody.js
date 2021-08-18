import React from "react";
import styled from "styled-components";
import numeral from "numeral";

const Container = styled.div`
  width: 100%;
  
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    flex-wrap: wrap;
  margin: 0 auto;
  max-width: 800px;
  background: #f8f8ff;

`;

const HeadlineContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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
      <InnerContainer>
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
      </InnerContainer>
    </Container>
  );
};

export default IndividalBody;
