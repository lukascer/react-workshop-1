/* eslint-disable react/state-in-constructor */
class Input extends React.PureComponent {
    state = {
        bar: '',
        foo: '',
    };

    handleChange = event => {
        this.setState({ [event.currentTarget.name]: event.currentTarget.value });
    };

    render() {
        return (
            <>
                <h2>Input</h2>
                <input type="text" name="foo" value={this.state.foo} onChange={this.handleChange} />
                <input type="text" name="bar" value={this.state.bar} onChange={this.handleChange} />
            </>
        );
    }
}
export default Input;
