import React, { useState, useEffect } from "react";
import styled from "styled-components";
import numeral from "numeral";

const Container = styled.div`
  width: 100%;
  background: #fff;
`;

const MetricContainer = styled.div`
  display: flex;

  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin: 1rem auto;
  background: #f8f8f8;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 800px;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const Metric = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background: #fff;
  width: 100%;
  padding: 1rem;
  margin: 0.2rem auto;
  text-align: center;

  @media (min-width: 768px) {
    width: auto;
    padding: 1rem;
    margin: 1.5rem 0.5rem;
  }
`;

const Title = styled.div`
  margin-bottom: 1.1rem;
  font-family: 'Roboto', sans-serif;
`;

const ApiResponse = styled.div`
font-family: 'Raleway', sans-serif;
font-weight: 100;
`;

const IndividualMetrics = ({ coin }) => {
  const [deltaColor, setColor] = useState("");
  useEffect(() => {
    if (coin.market_data.price_change_percentage_24h_in_currency.nzd < 0) {
      setColor("red");
    } else {
      setColor("green");
    }
  }, [deltaColor]);
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
          <ApiResponse
            style={{ color: `${deltaColor}` }}
          >{`${coin.market_data.price_change_percentage_24h_in_currency.nzd.toFixed(
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
