import { useState } from "react";
import Layout from "../../components/layout/Layout";
import styles from "./Coin.module.css";
import ChartComponent from "../../components/chart/ChartComponent";
import moment from 'moment'

const Coin = ({ coin }) => {
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


  let time = coin.market_data.last_updated
  let momentTime = moment(time).format('LLL')

  return (
    <>
      <Layout>
        <div className={styles.coin_page}>
          <div className={styles.coin_container}>
             
            {toggle ? (
              <ChartComponent {...coin} />
            ) : (
              <>
                {" "}
                <img
                  src={coin.image.large}
                  alt={coin.name}
                  className={styles.coin_image}
                />
                <h1 className={styles.coin_name}>{coin.name}</h1>
                <p className={styles.coin_ticker}>
                  {coin.symbol.toUpperCase()}
                </p>
                <p className={styles.coin_current}>
                  ${coin.market_data.current_price.nzd.toLocaleString()} NZD
                </p>
                <h3>Last updated: </h3>
                <p className={styles.last_updated}>
                  {momentTime}
                </p>
           
                {/* ------------- 24h Change---------------*/}
                <div className={styles.coin_grid}>
                  <div className={styles.coin_information}>
                    <div className={styles.coin_flex}>
                      <h3>24h Change</h3>

                      {coin.market_data.price_change_24h < 0 ? (
                        <>
                          <p className={(styles.price_change, styles.red)}>
                            $
                            {coin.market_data.price_change_24h.toLocaleString()}
                          </p>{" "}
                        </>
                      ) : (
                        <>
                          {" "}
                          <p className={(styles.price_change, styles.green)}>
                            $
                            {coin.market_data.price_change_24h.toLocaleString()}
                          </p>{" "}
                        </>
                      )}
                    </div>
                  </div>

                  {/* ------------- 24h High ---------------*/}

                  <div className={styles.coin_information}>
                    <div className="coin_flex">
                      <h3>24h High: </h3>
                      <p className={styles.high_price}>
                        ${coin.market_data.high_24h.nzd.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* ------------- 24h Low ---------------*/}

                  <div className={styles.coin_information}>
                    <div className="coin_flex">
                      <h3>24h Low: </h3>
                      <p className={styles.high_price}>
                        ${coin.market_data.low_24h.nzd.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* ------------- % change 24h ---------------*/}

                  <div className={styles.coin_information}>
                    <div className="coin_flex">
                      <h3>% Change (24h)</h3>

                      {coin.market_data.price_change_percentage_24h < 0 ? (
                        <>
                          {" "}
                          <p
                            className={(styles.percentage_increase, styles.red)}
                          >
                            {coin.market_data.price_change_percentage_24h.toLocaleString()}
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

                  {/* ------------- total volume ---------------*/}

                  <div className={styles.coin_information}>
                    <div className="coin_flex">
                      <h3>Total Volume: </h3>
                      <p className={styles.total_volume}>
                        {coin.market_data.total_volume.nzd.toLocaleString()}{" "}
                      </p>
                    </div>
                  </div>

                  {/* ------------- total supply ---------------*/}

                  {/* <div className={styles.coin_information}>
              <div className="coin_flex">
                <h3>Total Supply: </h3>
                <p className={styles.last_updated}>
                  {coin.market_data.total_supply.toLocaleString()}
                </p>
              </div>
            </div> */}

                  {/* ------------- market cap ---------------*/}

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
              {/* Button to go to chart page abd back */}
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
