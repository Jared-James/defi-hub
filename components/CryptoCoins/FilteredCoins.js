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
   if (window.location.href === "http://localhost:3000/") {
    setTimeout(() => {
      if (changeColor === "green") {
        setChangeColor("red");
      } else if (changeColor === "red") {
        setChangeColor("green");
      }
    }, 1000);
   }
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
              <FiRefreshCcw
                onClick={handleRefresh}
                className={styles.pointer}
              />
            </div>
          </div>
        </div>
        <div className={styles.sort_coin}>
          <h4 className={styles.hidden}>Name</h4>
          <div className={styles.sort_title}>
            <div className={styles.sort_arrow}>
              <FaArrowUp onClick={sortByNameASC} className={styles.pointer} />
            </div>
            <div className={styles.sort_arrow}>
              <FaArrowDown onClick={sortByNameDSC} className={styles.pointer} />
            </div>
          </div>
        </div>

        <div className={styles.sort_symbol}>
          <h4 className={styles.hidden}>Symbol</h4>
          <div className={styles.sort_title}>
            <div className={styles.sort_arrow}>
              <FaArrowUp onClick={sortBySymbolASC} className={styles.pointer} />
            </div>
            <div className={styles.sort_arrow}>
              <FaArrowDown
                onClick={sortBySymbolDSC}
                className={styles.pointer}
              />
            </div>
          </div>
        </div>

        <div className={styles.sort_percent}>
          <div className={styles.sort_percent_row}>
            <span className={styles.changeSpan}>
              <span className={styles.hidden}> 24H | Change</span>
            </span>
          </div>
          <div className={styles.sort_title}>
            <div className={styles.sort_arrow}>
              <FaArrowUp
                style={changeColor === "red" ? iconStyles : iconStyles2}
                onClick={sortByPercentASC}
                className={styles.pointer}
              />
            </div>
            <div className={styles.sort_arrow}>
              <FaArrowDown
                style={changeColor === "red" ? iconStyles2 : iconStyles}
                onClick={sortByPercentDSC}
                className={styles.pointer}
              />
            </div>
          </div>
        </div>

        <div className={styles.sort_price}>
          <h4 className={styles.hidden}>Last Price</h4>
          <div className={styles.sort_title}>
            <div className={styles.sort_arrow}>
              <FaArrowUp onClick={sortByPriceASC} className={styles.pointer} />
            </div>
            <div className={styles.sort_arrow}>
              <FaArrowDown
                onClick={sortByPriceDSC}
                className={styles.pointer}
              />
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
