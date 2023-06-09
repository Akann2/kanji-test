import styles from './Settings.module.scss'
import { useState } from 'react'
function Setting(props) {
    const [amount, setAmount] = useState([
        { name: 10, key: 1 },
        { name: 15, key: 2 },
        { name: 20, key: 3 },
        { name: 30, key: 4 },
        { name: 40, key: 5 }
    ]);
    const [type, setItems] = useState([
        { name: 'Hiragana', value: 'Hiragana', key: 1 },
        { name: 'Katakana', value: 'Katakana', key: 2 },
        { name: 'Hiragana & Katakana', value: 'Mix', key: 3 }
    ]);
    const pick = (obj) => {
        props.setApl(obj.value)
    }
    return (
        <>

            <div className={styles.settings}>
                <div className={styles.title}>
                    <h1>Kanji Test</h1>
                    <p>Hiragana & Katakana</p>
                </div>
                <div className={styles.settingsBlock}>
                    <div className={styles.block}>
                        <h2>Amount of questions</h2>
                        <ul>
                            {amount.map((obj) => (
                                <li
                                style={props.totalQuestions === obj.name ? {boxShadow: '0px 0px 0px 3px #42413f'} : null}
                                    key={obj.key}
                                    onClick={() => (props.totalQ(obj.name))}>
                                    {obj.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.block}>
                        <h2>Choose test type</h2>
                        <ul className={styles.column}>
                            {type.map((obj) => (
                                <li
                                    style={props.apl === obj.value ? {boxShadow: '0px 0px 0px 3px #42413f'} : null}
                                    className={styles.settingsBackground}
                                    key={obj.key}
                                    onClick={() => pick(obj)}>
                            {obj.name}
                        </li>
                            ))}
                    </ul>
                </div>
                <div className={styles.block}>
                    <button onClick={() => props.opened(false)}>Try yourself</button>
                </div>
            </div>
        </div >
        </>
    )

}

export default Setting