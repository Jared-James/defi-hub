import CryptoCoinsComponent from './CryptoCoins/CryptoCoinsComponent'

export default function CoinList({ filteredCoins }) {
    return (
        <>

            {filteredCoins.map(coin => {
                return (
                    <CryptoCoinsComponent key={coin.id} {...coin} />
                )
            })}
        </>
    )
}


