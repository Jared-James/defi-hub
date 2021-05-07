import { useState } from 'react'
import CoinList from '../components/CoinList'
import SearchBarComponent from '../components/SearchBar/SearchBarComponent'
import Layout from '../components/layout/Layout'


export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState('')

  const allCoins = filteredCoins.filter(coin => {
   return coin.name.toLowerCase().includes(search.toLowerCase())
  })
    

    const handleChange = e => {
      e.preventDefault()

      setSearch(e.target.value.toLowerCase())
    }

  return (
    <Layout >
      <div className="coin_app">
        <SearchBarComponent type="text" placeholder="search" onChange={handleChange} />
        <CoinList filteredCoins={allCoins} />
      </div>
    </Layout>
  )
}


export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=nzd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

  const filteredCoins = await res.json()

  return {
    props: {
      filteredCoins
    }
  }
}