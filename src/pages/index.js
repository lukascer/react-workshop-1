import { Component, memo } from 'react';
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
            <div className={styles.container}>
                <h1>React workshop 1</h1>
                <div className={styles.main}>
                    {/* <Heading title="Starej dobrej">Playground</Heading> */}
                    {/* <Click /> */}
                    {/* <Input /> */}
                    {/* <NonUpdating /> */}
                    {/* <RefComponent /> */}
                    {/* <List numbers={[1, 3, 5]} type="a" />
                    <List numbers={[1, 3, 5]} type="b" /> */}
                    {/* <LiftStateUp />
                    <UncontrolledForm /> */}
                    {/* <ItemsGrid />
                    <ItemsTable /> */}
                    {/* <Hoc /> */}
                    {/* <ContextApply /> */}
                    {/* <Counter /> */}
                    {/* <Effects /> */}
                    {/* <CounterWithDispatcher /> */}
                    {/* <Memo /> */}
                </div>
                <div className={styles.footer}>
                    Martin Krištof
                </div>
            </div>
        );
    }
}

export default Index;
