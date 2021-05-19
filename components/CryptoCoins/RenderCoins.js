import styles from "./Coins.module.css";
import Link from "next/link";

const CoinListCompnent = ({
  name,
  id,
  current_price,
  symbol,
  total_volume,
  market_cap,
  image,
  price_change_percentage_24h,
}) => {
  return (
    <Link href="/coin/[id]" as={`/coin/${id}`}>
      <a>
        <div className={styles.coin_container}>
          <div className={styles.coin_row}>
            {/* IMAGE */}
            <img src={image} alt={name} className={styles.coin_img} />

            {/* NAME */}
            <h1 className={styles.coin_h1}>{name}</h1>

            {/* SYMBOL */}
            <p className={styles.coin_symbol}>{symbol}</p>

            {/* CURRENT_PRICE */}
            <p className={styles.coin_price}>${current_price}</p>

            {/* PRICE_CHANGE_PERCENTAGE */}
            {price_change_percentage_24h < 0 ? (
              <p className={(styles.coin_percent, styles.red)}>
                {price_change_percentage_24h.toFixed(2)}%
              </p>
            ) : (
              <p className={(styles.coin_percent, styles.green)}>
                {price_change_percentage_24h.toFixed(2)}%
              </p>
            )}
            
            {/* MARKET CAP */}
            <p className={styles.coin_market}>
              Market Cap: <br />${market_cap.toLocaleString()}
            </p>
            
            {/* TOTAL VOLUME */}
            <p className={styles.coin_volume}>
              Total Volume: ${total_volume.toLocaleString()}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CoinListCompnent;
