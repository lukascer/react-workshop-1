class Click extends React.PureComponent {
    state = {
        toggled: false,
    };

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

export default Click;
