import { useEffect, useState } from "react";
import RenderChart from "./RenderChart";
import moment from "moment";
import "chartjs-adapter-moment";
import Loading from "../Loading/Loading";

const FetchChartComponent = ({ id }) => {
  const [btcId, setId] = useState("");
  const [chart, setChart] = useState();
  const [loading, isLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        x: moment(el[0]).format("LLL"),
        y: el[1],
      };
    });
  };

// Calls api and returns with daily price data
// Change interval=daily to other values, such as hourly, days, ect, to recieve more data

  useEffect(async () => {

    isLoading(true);

    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=nzd&days=30&interval=daily`
    );
    const data = await res.json();

    setId(id);
    setChart({
      day: formatData(data.prices),
      details: data,
    });

    isLoading(false);
  }, [btcId]);

  return (
    <>
      {loading && <Loading />}
      {chart && <RenderChart info={chart} BTC={id} />}
    </>
  );
};

export default FetchChartComponent;

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
