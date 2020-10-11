class UncontrolledForm extends React.PureComponent {
    constructor(props) {
        super(props);

        this.fileInput = React.createRef();
        this.textInput = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`File - ${this.fileInput.current?.files[0]?.name}`);
        alert(`Text - ${this.textInput.current.value}`);
    }

    render() {
        return (
            <>
            <h2>Uncontrolled Form</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Upload file:
                    <input type="file" ref={this.fileInput} />{' '}
                </label>
                <br />
                <input type="text" defaultValue="foo" ref={this.textInput} />
                <button type="submit">Submit</button>
            </form>
            </>
        );
    }
}

export default UncontrolledForm;
