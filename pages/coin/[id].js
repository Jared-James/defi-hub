import { useState } from "react";
import IndividualHeader from "../../components/individualCoins/IndividualHeader";
import IndividualBody from "../../components/individualCoins/IndividualBody";
import IndividualMetrics from "../../components/individualCoins/IndividualMetrics";
import styled from "styled-components";
import Layout from "../../components/layout/Layout";
import FetchChart from "../../components/chart/FetchChart";
import moment from "moment";
import Link from "next/link";

const Container = styled.div`
  min-height: 100vh;
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

const Coin = ({ coin }) => {
  console.log(coin);
  const [toggle, setToggle] = useState(false);
  const [buttonName, setButton] = useState("View Chart");

  const handleClick = (e) => {
    e.preventDefault();
    setToggle(!toggle);

    if (!toggle) {
      setButton("Return");
    } else {
      setButton("View Chart");
    }
  };

  let time = coin.market_data.last_updated;
  let momentTime = moment(time).format("LLL");

  return (
    <>
      <Layout>
        <IndividualHeader coin={coin} />
        <IndividualBody coin={coin} />
        <IndividualMetrics coin={coin} />
      </Layout>
    </>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
