import styles from './index.css';

export default function({ match }) {
    return (
      <div className={styles.normal}>
        <h1>{match.params.id}</h1>
      </div>
    );
  }