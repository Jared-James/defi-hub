import React from "react";
import styled from "styled-components";
import numeral from "numeral";

const Container = styled.div`
  width: 100%;
  background-color: green;
`;

const MetricContainer = styled.div`
  background: grey;
  display: flex;
  align-items: center;

  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 800px;
`;

const Metric = styled.div`
  margin: 2rem 1rem;
`;

const Title = styled.div``;

const ApiResponse = styled.div``;

const IndividualMetrics = ({ coin }) => {
  return (
    <Container>
      <MetricContainer>
        {/* <Metric><Title>LAST UPDATED</Title><ApiResponse>{coin.market_data.last_updated}</ApiResponse></Metric> */}
        <Metric>
          <Title>24 HOUR LOW</Title>
          <ApiResponse>
            {numeral(coin.market_data.low_24h.nzd).format("$0,0.00")}
          </ApiResponse>
        </Metric>
        <Metric>
          <Title>24 HOUR HIGH</Title>
          <ApiResponse>
            {numeral(coin.market_data.high_24h.nzd).format("$0,0.00")}
          </ApiResponse>
        </Metric>
        <Metric>
          <Title>ALL TIME HIGH</Title>
          <ApiResponse>
            {numeral(coin.market_data.ath.nzd).format("$0,0.00")}
          </ApiResponse>
        </Metric>
        <Metric>
          <Title>CIRCULATING SUPPLY</Title>
          <ApiResponse>
            {numeral(coin.market_data.circulating_supply).format("0.0a")}
          </ApiResponse>
        </Metric>
        <Metric>
          <Title>MAX SUPPLY</Title>
          <ApiResponse>
            {numeral(coin.market_data.total_supply).format("0.0a")}
          </ApiResponse>
        </Metric>
        <Metric>
          <Title>RETURNS (24HR)</Title>
          <ApiResponse>{`${coin.market_data.price_change_percentage_24h_in_currency.nzd.toFixed(
            2
          )}%`}</ApiResponse>
        </Metric>
        <Metric>
          <Title>RETURNS (YTD)</Title>
          <ApiResponse>{`${coin.market_data.price_change_percentage_1y_in_currency.nzd.toFixed(
            2
          )}%`}</ApiResponse>
        </Metric>
      </MetricContainer>
    </Container>
  );
};

export default IndividualMetrics;
