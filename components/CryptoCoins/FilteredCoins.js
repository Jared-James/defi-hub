import { useState, useEffect } from "react";
import RenderCoins from "./RenderCoins";
import styles from "./Coins.module.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";

export default function FilteredCoins({ filteredCoins }) {
  const [sorted, setSorted] = useState("default");
  const [changeColor, setChangeColor] = useState("red");

  filteredCoins.sort((a, b) => {
    if (sorted === "nameASC" && b.name.toLowerCase() > a.name.toLowerCase())
      return -1;
    if (sorted === "nameDSC" && a.name.toLowerCase() > b.name.toLowerCase())
      return -1;

    if (
      sorted === "symbolASC" &&
      b.symbol.toLowerCase() > a.symbol.toLowerCase()
    )
      return -1;
    if (
      sorted === "symbolDSC" &&
      a.symbol.toLowerCase() > b.symbol.toLowerCase()
    )
      return -1;

    if (
      sorted === "percentASC" &&
      a.price_change_percentage_24h > b.price_change_percentage_24h
    )
      return -1;
    if (
      sorted === "percentDSC" &&
      b.price_change_percentage_24h > a.price_change_percentage_24h
    )
      return -1;

    if (sorted === "priceASC" && a.current_price > b.current_price) return -1;
    if (sorted === "priceDSC" && b.current_price > a.current_price) return -1;

    if (sorted === "marketCap" && b.market_cap_rank > a.market_cap_rank)
      return -1;
  });

  const sortByNameASC = () => setSorted("nameASC");
  const sortByNameDSC = () => setSorted("nameDSC");

  const sortBySymbolASC = () => setSorted("symbolASC");
  const sortBySymbolDSC = () => setSorted("symbolDSC");

  const sortByPercentASC = () => setSorted("percentASC");
  const sortByPercentDSC = () => setSorted("percentDSC");

  const sortByPriceASC = () => setSorted("priceASC");
  const sortByPriceDSC = () => setSorted("priceDSC");

  const handleRefresh = () => setSorted("marketCap");

  useEffect(() => {
    setTimeout(() => {
      if (changeColor === "green") {
        setChangeColor("red");
      } else if (changeColor === "red") {
        setChangeColor("green");
      }
    }, 1000);
  }, [changeColor]);

  let iconStyles = { fill: "red" };
  let iconStyles2 = { fill: "green" };

  (changeColor === "red" && `${styles.green}`) ||
    (changeColor === "green" && `${styles.red}`);

  return (
    <>
      <div className={styles.sort}>
        <div className={styles.refresh}>
          <div className={styles.sort_title}>
            <div>
              <FiRefreshCcw onClick={handleRefresh} />
            </div>
          </div>
        </div>
        <div className={styles.sort_coin}>
          <h4>Name</h4>
          <div className={styles.sort_title}>
            <div className={styles.sort_arrow}>
              <FaArrowUp onClick={sortByNameASC} />
            </div>
            <div>
              <FaArrowDown onClick={sortByNameDSC} />
            </div>
          </div>
        </div>

        <div className={styles.sort_symbol}>
          <h4>Symbol</h4>
          <div className={styles.sort_title}>
            <div className={styles.sort_arrow}>
              <FaArrowUp onClick={sortBySymbolASC} />
            </div>
            <div>
              <FaArrowDown onClick={sortBySymbolDSC} />
            </div>
          </div>
        </div>

        <div className={styles.sort_percent}>
          <div className={styles.sort_percent_row}>
            <h4>24H Change</h4>
          </div>
          <div className={styles.sort_title}>
            <div className={styles.sort_arrow}>
              <FaArrowUp
                style={changeColor === "red" ? iconStyles : iconStyles2}
                onClick={sortByPercentASC}
              />
            </div>
            <div>
              <FaArrowDown
                style={changeColor === "red" ? iconStyles2 : iconStyles}
                onClick={sortByPercentDSC}
              />
            </div>
          </div>
        </div>

        <div className={styles.sort_price}>
          <h4>Last Price</h4>
          <div className={styles.sort_title}>
            <div className={styles.sort_arrow}>
              <FaArrowUp onClick={sortByPriceASC} />
            </div>
            <div>
              <FaArrowDown onClick={sortByPriceDSC} />
            </div>
          </div>
        </div>
      </div>
      {filteredCoins.map((coin) => {
        return <RenderCoins key={coin.id} {...coin} />;
      })}
    </>
  );
}
