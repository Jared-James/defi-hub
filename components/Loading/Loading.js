import styles from "./loading.module.css";

const Loading = () => {

  // loading screen used before chart renders
  
  return (
      <div className={styles.loading}>
        <p>Loading Please Wait ...</p>
      </div>
  );
};

export default Loading;
