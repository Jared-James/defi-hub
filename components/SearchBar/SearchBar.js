import styles from './Search.module.css'

const SearchBarComponent = ({...rest}) => {
    return (
        <>
            <div className={styles.coin_search}>
                <input className={styles.coin_input} {...rest} />
            </div>
        </>
    )
}

export default SearchBarComponent
