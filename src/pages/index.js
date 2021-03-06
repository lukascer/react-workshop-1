/* eslint-disable react/prefer-stateless-function */
import { Component, memo } from 'react';
import Head from 'next/head';
import Heading from '../components/Heading';
import Click from '../components/Click';
import Input from '../components/Input';
import NonUpdating from '../components/NonUpdating';
import RefComponent from '../components/RefComponent';
import List from '../components/List';
import LiftStateUp from '../components/LiftStateUp';
import UncontrolledForm from '../components/UncontrolledForm';
import { ItemsGrid, ItemsTable } from '../components/RenderProps';
import Hoc from '../components/Hoc';
import ContextApply from '../components/ContextApply';
import { Counter, Effects, CounterWithDispatcher } from '../components/Hooks';
import Memo from '../components/Memo';
import styles from '../../styles/Home.module.css';

class Index extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>React Workshop 1</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div className={styles.container}>
                    <h1>React workshop 1</h1>
                    <div className={styles.main}>
                        <h2>We will play</h2>
                        {/* Slide 52 */}
                        {/* <Heading title="Nadpis">Playground</Heading> */}
                        {/* Slide 53 */}
                        {/* <Click /> */}
                        {/* <Input /> */}
                        {/* Slide 54 */}
                        {/* <NonUpdating /> */}
                        {/* Slide 55 */}
                        {/* <RefComponent /> */}
                        {/* Slide 57 */}
                        {/* <List numbers={[1, 3, 5]} type="a" />
                        <List numbers={[1, 3, 5]} type="b" /> */}
                        {/* Slide 58 */}
                        {/* <LiftStateUp /> */}
                        {/* <UncontrolledForm /> */}
                        {/* Slide 63 */}
                        {/* <ItemsGrid /> */}
                        {/* <ItemsTable /> */}
                        {/* Slide 65 */}
                        {/* <Hoc /> */}
                        {/* Slide 67 */}
                        {/* <ContextApply /> */}
                        {/* Slide 68 */}
                        {/* <Counter /> */}
                        {/* <Effects /> */}
                        {/* <CounterWithDispatcher /> */}
                        {/* <Memo /> */}
                    </div>
                    <div className={styles.footer}>Martin Krištof</div>
                </div>
            </>
        );
    }
}

export default Index;
