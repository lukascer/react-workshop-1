const FancyButton = React.forwardRef(({ children }, ref) => (
    <button type="button" ref={ref} className="btn">
        {' '}
        {children}
    </button>
));

class RefComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.textInput = null;
        this.setTextInputRef = element => {
            this.textInput = element;
        };
        this.ref = React.createRef();
    }

    componentDidMount() {
        this.focusTextInput();
    }

    focusTextInput = () => {
        if (this.textInput) {
            this.textInput.focus();
        }
    };

    render() {
        return (
            <div>
                <h2>Ref</h2>
                <input type="text" ref={this.setTextInputRef} />
                <FancyButton ref={this.ref}>Klikni!</FancyButton>
            </div>
        );
    }
}

export default RefComponent;
