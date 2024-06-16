import styles from './NaoEncontrada.module.css';

function NaoEncontrada() {
    return(
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O vídeo que você procura não foi econtrado!</p>
        </section>

    )
}

export default NaoEncontrada;