import styles from './index.css';

export default function({ match }) {
    return (
        <div className={styles.normal}>
            <h1>page users {match.params.id} {match.params.year}</h1>
        </div>
    );
}