import { useState } from 'react';
import styles from './style.module.css';

export const Form = ({callback}) => {
    const [inputField, setInputField] = useState({
        description: "",
        value: "",
        type: "Entrada"
    })

    const submit = (e) => {
        e.preventDefault();
        if(inputField.value == "") {
            inputField.value = 1
        }
        callback(inputField)
        setInputField({
            description: "",
            value: "",
            type: "Entrada"
        })
    }
    return (
        <form onSubmit={submit} className={styles.formContainer} action="">
            <fieldset className={styles.fieldsetDescription}>
                <label htmlFor="description">Descrição</label>
                <input type="text" name="description" id="description" value={inputField.description} onChange={(e) => setInputField({ ...inputField, description: e.target.value })} placeholder="Digite sua descrição" />
                <small>Ex: Compra de roupas</small>
            </fieldset>
            <fieldset className={styles.fieldsetValue}>
                <label htmlFor="value">Valor (R$)</label> 
                <input type="number" name="value" id="value" value={inputField.value} onChange={(e) => setInputField({ ...inputField, value: Number(e.target.value) })} placeholder="1" />
                <label htmlFor="select">Tipo de Valor</label>
                <select name="select" value={inputField.type} onChange={(e) => setInputField({ ...inputField, type: e.target.value })} id="select">
                    <option className={styles.selectOption} value="Entrada">Entrada</option>
                    <option className={styles.selectOption} value="Despesa">Despesa</option>
                </select>
            </fieldset>
            <button disabled={inputField.description === "" ? true : false} className={styles.formButton} type="submit">Inserir Valor</button>
        </form>
    )
}