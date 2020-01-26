import styles from './_layout.css'

export default function(props) {
    return (
        <div className={styles.parent}>
            <h1>page users layout</h1>
            <div className={styles.child}>
                <h1>{props.children}</h1>
            </div>
        </div>
    );
}