import React from "react"
import Slider from "react-slick"
import styles from "./Slider.module.css"
import { useMediaQuery } from "react-responsive"

export default function SimpleSlider(props) {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1024px)"
  })
  const isTablet = useMediaQuery({ query: "(min-device-width: 600px)" })
  const slidesToShow = isDesktop ? 5 : isTablet ? 3 : 3

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1
  }

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {props.filteredCoins.map((symbol, idx) => (
          <div key={idx}>
            <h3>
              {symbol.symbol.toUpperCase()}
              {symbol.price_change_percentage_24h < 0 ? (
                <p className={(styles.coin__percent, styles.red)}>
                  {symbol?.price_change_percentage_24h?.toFixed(2)}%
                </p>
              ) : (
                <p className={(styles.coin__percent, styles.green)}>
                  {symbol?.price_change_percentage_24h?.toFixed(2)}%
                </p>
              )}
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  )
}
