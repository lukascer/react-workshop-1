/* eslint-disable react/state-in-constructor */
class Click extends React.PureComponent {
    state = {
        toggled: false,
    };

    handleClick = () => {
        this.setState(state => ({ toggled: !state.toggled }));
    };

    render() {
        return (
            <>
                <h2>Click</h2>
                <button type="button" onClick={this.handleClick}>
                    {this.state.toggled ? 'On' : 'Off'}
                </button>
            </>
        );
    }
}

export default Click;
