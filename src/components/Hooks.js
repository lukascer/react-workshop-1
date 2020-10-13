export const Counter = () => {
    const [count, setCount] = React.useState(0);
    const [nic, setNic] = React.useState(0);

    return (
        <>
            <h2>useState</h2>
            <button type="button" onClick={() => setCount(count + 1)}>
                {count}
            </button>
            <button type="button" onClick={() => setNic(nic + 1)}>
                {nic}
            </button>
        </>
    );
};

const LifecycleDemo = ({ random }) => {
    React.useEffect(() => {
        console.log('render!'); // componentDidMount + Update

        return () => console.log('unmounting & clenaup...'); // componentWillUnmount
    }, [random]);

    return "I'm a lifecycle demo";
};

export const Effects = () => {
    const [random, setRandom] = React.useState(Math.random());
    const [mounted, setMounted] = React.useState(true);

    const reRender = () => setRandom(Math.random());
    const toggle = () => setMounted(!mounted);

    return (
        <>
            <h2>useEffect</h2>
            <button type="button" onClick={reRender}>
                Re-render
            </button>
            <button type="button" onClick={toggle}>
                Show/Hide LifecycleDemo
            </button>
            {mounted && <LifecycleDemo random={random} />}
        </>
    );
};

const initialState = { count: 0 };
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        default:
            throw new Error();
    }
};
export const CounterWithDispatcher = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <>
            <h2>useReducer</h2>
            Count: {state.count}
            <button type="button" onClick={() => dispatch({ type: 'decrement' })}>
                -
            </button>
            <button type="button" onClick={() => dispatch({ type: 'increment' })}>
                +
            </button>
        </>
    );
};
