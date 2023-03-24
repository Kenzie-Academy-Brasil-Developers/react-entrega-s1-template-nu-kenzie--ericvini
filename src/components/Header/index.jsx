import styles from './style.module.css'

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <h1 className={styles.headerTitle}>
                <span className='primary--color'>Nu</span> Kenzie
            </h1>
        </header>
    )
}