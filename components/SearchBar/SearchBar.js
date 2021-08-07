import styles from "./Search.module.css";
import { FaSearchDollar } from 'react-icons/fa';

const SearchBarComponent = ({ ...rest }) => {
  return (
    <>
      <div className={styles.search}>
        <div className={styles.search__container}>
          <input className={styles.search__container_input} {...rest} />
          <div className={styles.search__container_icon}><FaSearchDollar /></div>
        </div>
      </div>
    </>
  );
};

export default SearchBarComponent;
