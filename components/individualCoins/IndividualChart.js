import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from 'highcharts/modules/exporting';
const Container = styled.div`
  width: 100%;
`;

const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  flex-wrap: wrap;
  margin: 1rem auto;
  max-width: 800px;
  background: #f8f8ff;
`;

const IndividualChart = ({ coin }) => {
  const [priceData, setPriceData] = useState([]);
  const [btcId, setId] = useState("");
  const { id } = coin;

  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=nzd&days=30&interval=daily`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setPriceData(json.prices);
        setId(id)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [btcId]);

  const withDataLabels = {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Time'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Tokyo',
        data: priceData.forEach(item => item[1].toFixed(2))
    }]
};

  if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
}

  return (
    <Container>
      <ChartContainer>
        <HighchartsReact highcharts={Highcharts} options={withDataLabels} />
      </ChartContainer>
    </Container>
  );
};

export default IndividualChart;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=nzd&days=14`
  );
  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
