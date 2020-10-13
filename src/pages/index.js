/* eslint-disable react/prefer-stateless-function */
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import App from '../components/App';

const Index = () => (
    <>
        <Head>
            <title>React Workshop 1</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className={styles.container}>
            <h1>React workshop 1</h1>
            <div className={styles.main}>
                <App />
            </div>
            <div className={styles.footer}>Martin Krištof</div>
        </div>
    </>
);

export default Index;
