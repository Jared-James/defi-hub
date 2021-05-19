import { useState } from "react";
import Layout from "../../components/layout/Layout";
import styles from "./Coin.module.css";
import FetchChart from "../../components/chart/FetchChart";
import moment from "moment";
import Link from "next/link";

const Coin = ({ coin }) => {
  const [toggle, setToggle] = useState(false);
  const [buttonName, setButton] = useState("View Chart");

  // toogles between individual coin information & rendering the chart
  const handleClick = (e) => {
    e.preventDefault();
    setToggle(!toggle);

    if (!toggle) {
      setButton("Return");
    } else {
      setButton("View Chart");
    }
  };

  // Moment() for formatting lasted updated
  let time = coin.market_data.last_updated;
  let momentTime = moment(time).format("LLL");

  return (
    <>
      <Layout>
        <div className={styles.coin_page}>
          <div className={styles.coin_container}>
            {toggle ? (
              <FetchChart {...coin} />
            ) : (
              <>
                <div className={styles.coin_return}>
                  <Link href="/">
                    <img src="https://img.icons8.com/fluent/50/000000/back.png" />
                  </Link>
                </div>
                {/* IMAGE */}
                <img
                  src={coin.image.large}
                  alt={coin.name}
                  className={styles.coin_image}
                />
                {/* NAME */}
                <h1 className={styles.coin_name}>{coin.name}</h1>
                {/* TICKER */}
                <p className={styles.coin_ticker}>
                  {coin.symbol.toUpperCase()}
                </p>
                {/* CURRENT_PRICE */}
                <p className={styles.coin_current}>
                  ${coin.market_data.current_price.nzd.toLocaleString()} NZD
                </p>
                {/* LAST_UPDATED */}
                <h3>Last updated: </h3>
                <p className={styles.last_updated}>{momentTime}</p>
                {/* 24_HOUR CHANGE_*/}
                <div className={styles.coin_grid}>
                  <div className={styles.coin_information}>
                    <div className={styles.coin_flex}>
                      <h3>24h Change</h3>

                      {coin.market_data.price_change_24h < 0 ? (
                        <>
                          <p className={(styles.price_change, styles.red)}>
                            $
                            {coin.market_data.price_change_24h.toLocaleString()}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className={(styles.price_change, styles.green)}>
                            $
                            {coin.market_data.price_change_24h.toLocaleString()}
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* 24_HOUR_HIGH */}

                  <div className={styles.coin_information}>
                    <div className="coin_flex">
                      <h3>24h High: </h3>
                      <p className={styles.high_price}>
                        ${coin.market_data.high_24h.nzd.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* 24_HOUR_LOW*/}

                  <div className={styles.coin_information}>
                    <div className="coin_flex">
                      <h3>24h Low: </h3>
                      <p className={styles.high_price}>
                        ${coin.market_data.low_24h.nzd.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* %_CHANGE_IN_24_HOURS*/}

                  <div className={styles.coin_information}>
                    <div className="coin_flex">
                      <h3>% Change (24h)</h3>

                      {coin.market_data.price_change_percentage_24h < 0 ? (
                        <>
                          <p
                            className={(styles.percentage_increase, styles.red)}
                          >
                            {coin.market_data.price_change_percentage_24h.toLocaleString()}{" "}
                            %
                          </p>
                        </>
                      ) : (
                        <p
                          className={(styles.percentage_increase, styles.green)}
                        >
                          {coin.market_data.price_change_percentage_24h.toLocaleString()}
                          %
                        </p>
                      )}
                    </div>
                  </div>

                  {/* TOTAL_VOLUME*/}

                  <div className={styles.coin_information}>
                    <div className="coin_flex">
                      <h3>Total Volume: </h3>
                      <p className={styles.total_volume}>
                        {coin.market_data.total_volume.nzd.toLocaleString()}{" "}
                      </p>
                    </div>
                  </div>

                  {/* MARKET_CAP */}

                  <div className={styles.coin_information}>
                    <div className="coin_flex">
                      <h3>Market Cap </h3>
                      <p className={styles.last_updated}>
                        {coin.market_data.market_cap.nzd.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </>
            )}

            <button className={styles.button} onClick={handleClick}>
              {buttonName}
            </button>
          </div>
        </div>
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
