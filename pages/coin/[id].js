import Layout from "../../components/layout/Layout"
import IndividualHeader from "../../components/individualCoins/IndividualHeader"
import IndividualBody from "../../components/individualCoins/IndividualBody"
import IndividualMetrics from "../../components/individualCoins/IndividualMetrics"
import IndividualChart from "../../components/individualCoins/IndividualChart"
import * as gtag from "../../gtag"

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
  const initTime = Date.now()
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
  const finalTime = initTime - Date.now()
  gtag.event({
    action: "Time",
    event_category: "this one is time",
    event_label: "time tabel",
    value: finalTime
  })

  gtag.event({
    action: "second event",
    event_category: "this ons is just random",
    event_label: "random label",
    value: 12345
  })
  const data = await res.json()

  return {
    props: {
      coin: data
    }
  }
}
