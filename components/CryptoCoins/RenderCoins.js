import styles from "./Coins.module.css"
import Link from "next/link"

const RenderCoins = ({
  name,
  id,
  current_price,
  symbol,
  total_volume,
  market_cap,
  image,
  price_change_percentage_24h
}) => {
  return (
    <>
      <div className={styles.coin_container}>
        <Link href="/coin/[id]" as={`/coin/${id}`}>
          <a>
            <div className={styles.coin__row}>
              <img src={image} alt={name} className={styles.coin__img} />

              <p className={styles.coin__name}>{name}</p>

              <p className={styles.coin__symbol}>{symbol}</p>

              <p className={styles.coin__price}>
                ${parseFloat(current_price?.toFixed(3)).toLocaleString()}
              </p>

              {price_change_percentage_24h < 0 ? (
                <p className={(styles.coin__percent, styles.red)}>
                  {price_change_percentage_24h?.toFixed(2)}%
                </p>
              ) : (
                <p className={(styles.coin__percent, styles.green)}>
                  {price_change_percentage_24h?.toFixed(2)}%
                </p>
              )}

              <p className={styles.coin__market}>
                Market Cap: <br />${market_cap.toLocaleString()}
              </p>
              <p className={styles.coin__volume}>
                Total Volume: ${total_volume.toLocaleString()}
              </p>
            </div>
          </a>
        </Link>
      </div>
    </>
  )
}

export default RenderCoins
