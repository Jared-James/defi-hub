import RenderCoins from './RenderCoins'

export default function FilteredCoins({ filteredCoins }) {

    /* In pages/index.js we call coingecko API and render <FilteredCoins /> with all coin data
        Then we map through each coin and render <RenderCoins />  */

    return (
        <>
            {filteredCoins.map(coin => {
                return (
                    <RenderCoins key={coin.id} {...coin} />
                )
            })}
        </>
    )
}


