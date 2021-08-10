import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./Slider.module.css";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 2000,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <div className={styles.slider}>
        <Slider {...settings}>
          {this.props.filteredCoins.map((symbol) => (
            <>
              <h3>
                {symbol.symbol.toUpperCase()} :
                {symbol.price_change_percentage_24h < 0 ? (
                     <p className={(styles.coin__percent, styles.red)}>
                     {symbol.price_change_percentage_24h.toFixed(2)}%
                   </p>
                ) : (
                    <p className={(styles.coin__percent, styles.green)}>
                    {symbol.price_change_percentage_24h.toFixed(2)}%
                  </p>
                )}
              </h3>
            </>
          ))}
        </Slider>
      </div>
    );
  }
}
