import styles from './style.module.css'

export const List = ({ list, deleted }) => {
    const greenBorder = {
        borderLeft: "var(--color-secundary) 4px solid"
    }
    const grayBorder = {
        borderLeft: "var(--gray-2) 4px solid"
    }
    return (
        <div className={styles.financeContainer}>
            <h3 className={styles.financeH3}>Resumo Financeiro</h3>
            {list.length === 0 ? (
                <h2 className={styles.financeH2}>Você ainda não possui nenhum lançamento</h2>
            ) : (
                <ul className={styles.financeList}>
                    {list.map((element, index) => {
                        return (
                            <li key={index} className={styles.financeItem} style={element.type === "Entrada" ? greenBorder : grayBorder}>
                                <div className={styles.financeTitle} >
                                    <h3>{element.description}</h3>
                                    <small>{element.type}</small>
                                </div>
                                <div className={styles.financeValue} >
                                    <span>{element.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                                    <button onClick={() => deleted(index)}>Excluir</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            )}

        </div>
    )
}