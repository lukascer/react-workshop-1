class NonUpdating extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggled: false,
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    handleClick = event => {
        this.setState(state => ({ toggled: !state.toggled }));
    };

    render() {
        return (
            <>
                <h2>Click</h2>
                <button onClick={this.handleClick}>{this.state.toggled ? 'On' : 'Off'}</button>
            </>
        );
    }
}
export default NonUpdating;
