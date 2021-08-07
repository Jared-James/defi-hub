import styles from "./Coins.module.css";
import Link from "next/link";

const RenderCoins = ({
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
          <div className={styles.coin__row}>
            {/* IMAGE */}
            <img src={image} alt={name} className={styles.coin__img} />

            {/* NAME */}
            <p className={styles.coin__name}>{name}</p>

            {/* SYMBOL */}
            <p className={styles.coin__symbol}>{symbol}</p>

            {/* CURRENT_PRICE */}
            <p className={styles.coin__price}>${parseFloat(current_price.toFixed(3)).toLocaleString()}</p>

            {/* PRICE_CHANGE_PERCENTAGE */}
            {price_change_percentage_24h < 0 ? (
              <p className={(styles.coin__percent, styles.red)}>
                {price_change_percentage_24h.toFixed(2)}%
              </p>
            ) : (
              <p className={(styles.coin__percent, styles.green)}>
                {price_change_percentage_24h.toFixed(2)}%
              </p>
            )}
            
            {/* MARKET CAP */}
            <p className={styles.coin__market}>
              Market Cap: <br />${market_cap.toLocaleString()}
            </p>
            
            {/* TOTAL VOLUME */}
            <p className={styles.coin__volume}>
              Total Volume: ${total_volume.toLocaleString()}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default RenderCoins;
