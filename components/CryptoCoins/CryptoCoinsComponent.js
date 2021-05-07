import styles from './Coins.module.css'
import Link from 'next/link'

const CryptoCoinsComponent = ({
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
        <Link href="/coin/[id]" as={`/coin/${id}`}>
            <a>
            <div className={styles.coin_container}>
                <div className={styles.coin_row}>
                    <div className={styles.coin}>
                        <img src={image} alt={name} className={styles.coin_img} />
                        <h1 className={styles.coin_h1}>{name}</h1>
                        <p className={styles.coin_symbol}>{symbol}</p>
                        <div className={styles.coin_data}>
                            <p className={styles.coin_price}>${current_price}</p>
                            <p className={styles.coin_volume}>${total_volume.toLocaleString()}</p>

                            {price_change_percentage_24h < 0 ? (
                                <p className={styles.coin_percent, styles.red}>
                                    {price_change_percentage_24h.toFixed(2)}%
                                </p>) : (
                                <p className={styles.coin_percent, styles.green}>
                                    {price_change_percentage_24h.toFixed(2)}%
                                </p>
                            )}

                            <p className={styles.coin_marketcap}>
                                Mkt Cap: ${market_cap.toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </a>
        </Link>
    )
}

export default CryptoCoinsComponent
