import Layout from "../../components/layout/Layout"
import IndividualHeader from "../../components/individualCoins/IndividualHeader"
import IndividualBody from "../../components/individualCoins/IndividualBody"
import IndividualMetrics from "../../components/individualCoins/IndividualMetrics"
import IndividualChart from "../../components/individualCoins/IndividualChart"

const Coin = ({ coin }) => {
  return (
    <>
      <Layout>
        <IndividualHeader coin={coin} />
        <IndividualBody coin={coin} />
        <IndividualMetrics coin={coin} />
        <IndividualChart coin={coin} />
      </Layout>
    </>
  )
}

export default Coin

export async function getServerSideProps(context) {
  const { id } = context.query

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

  const data = await res.json()

  return {
    props: {
      coin: data
    }
  }
}
