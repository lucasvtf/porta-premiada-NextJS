import styles from '../../styles/Cartao.module.css'

interface CartaProps {
    bgcolor?: string
    children?: any
}

export default function Cartao(props: CartaProps) {
    return (
        <div className={styles.cartao} style={{
            backgroundColor: props.bgcolor ?? '#fff'
        }}>
            {props.children}
        </div>
    )
}