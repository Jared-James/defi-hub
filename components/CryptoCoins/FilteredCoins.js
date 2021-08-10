import { useState, useEffect } from "react";
import RenderCoins from "./RenderCoins";
import styles from "./Coins.module.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function FilteredCoins({ filteredCoins }) {
  const [sorted, setSorted] = useState("default");

  filteredCoins.sort((a, b) => {
    if (sorted === 'nameASC' && b.name.toLowerCase() > a.name.toLowerCase()) return  -1;
    if (sorted === 'nameDSC' && a.name.toLowerCase() > b.name.toLowerCase()) return  -1;

    if (sorted === 'symbolASC' && b.symbol.toLowerCase() > a.symbol.toLowerCase()) return  -1;
    if (sorted === 'symbolDSC' && a.symbol.toLowerCase() > b.symbol.toLowerCase()) return  -1;

    if (sorted === 'percentASC' && a.price_change_percentage_24h > b.price_change_percentage_24h) return  -1;
    if (sorted === 'percentDSC' && b.price_change_percentage_24h > a.price_change_percentage_24h) return  -1;

    if (sorted === 'priceASC' && a.current_price > b.current_price) return  -1;
    if (sorted === 'priceDSC' && b.current_price > a.current_price) return  -1;
  });

  const sortByNameASC = () => setSorted('nameASC')
  const sortByNameDSC = () => setSorted('nameDSC')

  const sortBySymbolASC = () => setSorted('symbolASC')
  const sortBySymbolDSC = () => setSorted('symbolDSC')

  const sortByPercentASC = () => setSorted('percentASC')
  const sortByPercentDSC = () => setSorted('percentDSC')

  const sortByPriceASC = () => setSorted('priceASC')
  const sortByPriceDSC = () => setSorted('priceDSC')




  const handleClick = () => {}

  return (
    <>
      <div className={styles.sort}>
        <div className={styles.sort_coin}>
            <div>
              <FaArrowUp onClick={sortByNameASC}/>
            </div>
            <div>
              <FaArrowDown onClick={sortByNameDSC}/>
            </div>
        </div>
        <div className={styles.sort_symbol}>
            <div>
             <FaArrowUp onClick={sortBySymbolASC}/>
            </div>
            <div>
            <FaArrowDown onClick={sortBySymbolDSC}/>
        </div>
      
        </div>
        <div className={styles.sort_percent}>
        <div>
            <FaArrowUp onClick={sortByPercentASC}/>
          </div>
          <div>
            <FaArrowDown onClick={sortByPercentDSC}/>
          </div>
        
        </div>
        <div className={styles.sort_price}>
       
          <div>
            <FaArrowUp onClick={sortByPriceASC}/>
          </div>
          <div>
            <FaArrowDown onClick={sortByPriceDSC}/>
          </div>
          
        </div>
     
      </div>
      {filteredCoins.map((coin) => {
        return <RenderCoins key={coin.id} {...coin} setSorted={setSorted} />;
      })}
    </>
  );
}
