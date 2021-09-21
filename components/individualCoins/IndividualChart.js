import React, { useEffect, useState } from "react"

import styled from "styled-components"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import HighchartsExporting from "highcharts/modules/exporting"
import moment from "moment"
import * as gtag from "../../gtag"
const Container = styled.div`
  width: 100%;
  background: #fff;
`

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  flex-wrap: wrap;
  margin: 1rem auto;
  max-width: 800px;
  background: #f8f8f8;
  padding: 2rem;
`

const Chart = styled.div`
  width: 100%;
`

const IndividualChart = ({ coin }) => {
  const { id } = coin
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "line"
    },
    title: {
      text: `${id} price`.toUpperCase()
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Date"
      }
    },
    yAxis: {
      title: {
        text: `price`.toUpperCase()
      }
    },
    series: [
      {
        name: `${id}`,
        data: []
      }
    ],
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    }
  })

  const fetchData = async () => {
    const initTime = Date.now()
    const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=nzd&days=180&interval=hourly`
    const response = await fetch(url)
    const JSON = await response.json()
    const finalTime = Date.now() - initTime

    gtag.config({
      USER_ID: "BOB UR UNCLE"
    })

    gtag.event({
      action: "FISH HUNTER",
      category: "this ons is just random",
      label: "random label",
      USER_ID: "BOB UR UNCLE",
      value: finalTime
    })
    const mappedJSON = JSON.prices.map((item) => {
      const styledPrice = item[1]?.toFixed(2)
      const Time = item[0]
      return [Time, Number(styledPrice)]
    })
    setChartOptions({
      series: [{ data: [...mappedJSON] }]
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (typeof Highcharts === "object") {
    HighchartsExporting(Highcharts)
  }

  return (
    <Container>
      <ChartContainer>
        <Chart>
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </Chart>
      </ChartContainer>
    </Container>
  )
}

export default IndividualChart

export async function getServerSideProps(context) {
  const { id } = context.query

  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=nzd&days=180&interval=hourly`
  )
  const data = await res.json()

  return {
    props: {
      coin: data
    }
  }
}
