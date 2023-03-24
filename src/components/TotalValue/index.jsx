import styles from './style.module.css'

export const TotalValue = ({ list }) => {
    const calcValue = () => {
        const values = list.map(element => {
            if (element.type !== "Entrada") {
                return element.value * (-1)
            } else {
                return element.value
            }
        })
        const total = values.reduce((acc, curr) => acc + curr);
        const formatedTotal = Number(total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        return formatedTotal
    }

    return (
        <div className={styles.totalContainer} >
            <div className={styles.totalP}>
                <h3>Valor Total:</h3>
                <small>O valor se refere ao saldo</small>
            </div>
            <span className='primary--color'>
                {
                    list.length === 0 ?
                        "R$0,00"
                        :
                        calcValue()
                }
            </span>
        </div>
    )
}